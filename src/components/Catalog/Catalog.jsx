import css from "../Catalog/Catalog.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AllFilters from "./catalogComponents/AllFilters/AllFilters.jsx";
import Cards from "./catalogComponents/Cards/Cards.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setVans, setActiveFilters, resetFilters } from "../../redux/vansSlice";

function Catalog() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [filteredVans, setFilteredVans] = useState([]);
  const [allVans, setAllVans] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const filters = useSelector((state) => state.vans.filters);

  useEffect(() => {
    const fetchVans = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
        );

        const vansData = response.data.items;
        setAllVans(vansData);
        dispatch(setVans(vansData));
        setFilteredVans(vansData);
      } catch (error) {
        console.error("Error fetching vans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVans();
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(4);
  }, [filters]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const handleSearchClick = () => {
    dispatch(setActiveFilters());
    const filtered = allVans.filter(
      ({ AC, TV, kitchen, bathroom, transmission, location, form }) => {
        return (
          (filters.AC ? filters.AC === AC : true) &&
          (filters.TV ? filters.TV === TV : true) &&
          (filters.kitchen ? filters.kitchen === kitchen : true) &&
          (filters.bathroom ? filters.bathroom === bathroom : true) &&
          (filters.transmission
            ? filters.transmission.toLowerCase() === transmission.toLowerCase()
            : true) &&
          (filters.location
            ? location.toLowerCase().includes(filters.location.toLowerCase())
            : true) &&
          (filters.forms.length > 0 ? filters.forms.includes(form) : true)
        );
      }
    );
    resetFilters();
    setFilteredVans(filtered);
    setVisibleCount(4);
  };

  return (
    <div className={css.catalog}>
      <AllFilters handleSearchClick={handleSearchClick} />
      {loading && <span className={css.loader}></span>}
      <Cards
        loadMore={loadMore}
        hasMore={visibleCount < filteredVans.length}
        vans={filteredVans.slice(0, visibleCount)}
      />
    </div>
  );
}

export default Catalog;
