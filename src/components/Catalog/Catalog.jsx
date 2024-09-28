import css from "../Catalog/Catalog.module.css";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import AllFilters from "./catalogComponents/AllFilters/AllFilters.jsx";
import Cards from "./catalogComponents/Cards/Cards.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setVans } from "../../redux/vansSlice";
import { selectVans } from "../../redux/vansSelectors";



function Catalog() {
  const [visibleCount, setVisibleCount] = useState(4);
  const dispatch = useDispatch();
  const vans = useSelector(selectVans);
  const filters = useSelector((state) => state.vans.filters);
  console.log(vans);
  const filterVans = useMemo(() => {
    return vans.filter(({ AC }) => {
      return filters.AC === AC;
    })
  },[filters, vans]);


  useEffect(() => {
    try {
      async function fetchVans() {
        const response = await axios.get(
          "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
        );

        const vansData = response.data.items;

        dispatch(setVans(vansData));
      }

      fetchVans();
    } catch (error) {
      console.error("Error searching vans:", error);
    }
  }, []);

  useEffect(() => {
  
  }, [filters, dispatch]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); 
  };

  return (
    <div className={css.catalog}>
      <AllFilters />
      <Cards
        loadMore={loadMore}
        hasMore={visibleCount < vans.length}
        vans={filterVans}
      />
    </div>
  );
}

export default Catalog;
