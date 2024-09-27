import css from "../Catalog/Catalog.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AllFilters from "./catalogComponents/AllFilters/AllFilters.jsx";
import Cards from "./catalogComponents/Cards/Cards.jsx";

function Catalog() {
  const [vans, setVans] = useState([]);

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

   // vans.forEach(van => console.log(van));

  return (
    <div className={css.catalog}>
      <AllFilters />
      <Cards vans={vans} />
    </div>
  );
}

export default Catalog;
