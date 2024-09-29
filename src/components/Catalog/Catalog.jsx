import css from "../Catalog/Catalog.module.css";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import AllFilters from "./catalogComponents/AllFilters/AllFilters.jsx";
import Cards from "./catalogComponents/Cards/Cards.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setVans, applyFilters, setActiveFilters} from "../../redux/vansSlice";
import { selectVans } from "../../redux/vansSelectors";

function Catalog() {
  const [visibleCount, setVisibleCount] = useState(4);
  const dispatch = useDispatch();
  const vans = useSelector(selectVans);

  const filters = useSelector((state) => state.vans.filters);
  const filterVans = useMemo(() => {
    return vans.filter(
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
  }, [filters, vans]);

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
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(4); // Скидаємо до початкового значення
     console.log(filters);
  }, [filters]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const handleSearchClick = () => {

    dispatch(setActiveFilters()); // Копіюємо тимчасові фільтри в активні
    dispatch(applyFilters()); // Застосовуємо активні фільтри
    setVisibleCount(4); // Скидаємо кількість видимих вантажівок
  };

  return (
    <div className={css.catalog}>
      <AllFilters handleSearchClick={handleSearchClick} />
      <Cards
        loadMore={loadMore}
        hasMore={visibleCount < filterVans.length} // Якщо є більше вантажівок, ніж видно, показуємо кнопку
        vans={filterVans.slice(0, visibleCount)} // Відображаємо лише обмежену кількість вантажівок
      />
    </div>
  );
}

export default Catalog;
