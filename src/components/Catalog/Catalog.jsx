import css from "../Catalog/Catalog.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AllFilters from "./catalogComponents/AllFilters/AllFilters.jsx";
import Cards from "./catalogComponents/Cards/Cards.jsx";

function Catalog() {
  const [vans, setVans] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    try {
      async function fetchVans() {
        const response = await axios.get(
          "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
        );
        setVans(response.data.items);
      }

      fetchVans();
    } catch (error) {
      console.error("Error searching vans:", error);
    }
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Збільшуємо лічильник на 4
  };

  return (
    <div className={css.catalog}>
      <AllFilters />
      <Cards vans={vans.slice(0, visibleCount)} loadMore={loadMore} hasMore={visibleCount < vans.length}/>
    </div>
  );
}

export default Catalog;
