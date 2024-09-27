import css from "../Catalog/Catalog.module.css";
import Location from "../Catalog/catalogComponents/Location/Location.jsx";
import Filters from "../Catalog/catalogComponents/Filters/Filters.jsx";
import VehicleEquipment from "../Catalog/catalogComponents/VehicleEquipment/VehicleEquipment.jsx";
import VehicleType from "../Catalog/catalogComponents/VehicleType/VehicleType.jsx";
import ButtonSearch from "../Catalog/catalogComponents/ButtonSearch/ButtonSearch.jsx"

function Catalog() {
  return (
    <div className={css.catalog}>
      <div className={css.filters}>
        <Location />
        <Filters />
        <VehicleEquipment />
              <VehicleType />
              <ButtonSearch />
      </div>
    </div>
  );
}

export default Catalog;
