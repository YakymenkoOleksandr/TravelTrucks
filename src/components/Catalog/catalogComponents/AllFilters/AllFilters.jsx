import css from "./AllFilters.module.css";
import Location from "./Location/Location.jsx";
import Filters from "./Filters/Filters.jsx";
import VehicleEquipment from "./VehicleEquipment/VehicleEquipment.jsx";
import VehicleType from "./VehicleType/VehicleType.jsx";
import ButtonSearch from "./ButtonSearch/ButtonSearch.jsx";
import PropTypes from "prop-types";

function AllFilters({ handleSearchClick }) {
  return (
    <div className={css.filters}>
      <Location />
      <Filters />
      <VehicleEquipment />
      <VehicleType />
      <ButtonSearch onClick={handleSearchClick} />
    </div>
  );
}

AllFilters.propTypes = {
  handleSearchClick: PropTypes.func.isRequired,
};

export default AllFilters;
