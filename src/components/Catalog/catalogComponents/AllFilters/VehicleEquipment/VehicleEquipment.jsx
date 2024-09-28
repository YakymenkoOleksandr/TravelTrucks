import css from "./VehicleEquipment.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter, setTransmission } from "../../../../../redux/vansSlice.js";

function VehicleEquipment() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.vans.filters);

  const handleTransmissionChange = () => {
    const newTransmission = filters.transmission === "Manual" ? "Automatic" : "Manual";
    dispatch(setTransmission({ value: newTransmission }));
  };

  return (
    <div className={css.wrapperOfVehicleEquipment}>
      <div className={css.wrapperForHeader}>
        <h3 className={css.headerOfVehicleEquipment}>Vehicle equipment</h3>
      </div>
      <div className={css.wrapperForFilterIcons}>
        {/* AC Filter */}
        <div
          className={`${css.buttonOfFilter} ${filters.AC ? css.active : ""}`}
          onClick={() => dispatch(toggleFilter("AC"))}
        >
          <svg className={css.iconForVehicleEquipment}>
            <use href="/icons/symbol-defs.svg#icon-wind"></use>
          </svg>
          <p className={css.textInFilterButton}>AC</p>
        </div>

        {/* Kitchen Filter */}
        <div
          className={`${css.buttonOfFilter} ${filters.kitchen ? css.active : ""}`}
          onClick={() => dispatch(toggleFilter("kitchen"))}
        >
          <svg className={css.iconForVehicleEquipment}>
            <use href="/icons/symbol-defs.svg#icon-Group"></use>
          </svg>
          <p className={css.textInFilterButton}>Kitchen</p>
        </div>

        {/* TV Filter */}
        <div
          className={`${css.buttonOfFilter} ${filters.TV ? css.active : ""}`}
          onClick={() => dispatch(toggleFilter("TV"))}
        >
          <svg className={css.iconForVehicleEquipment}>
            <use href="/icons/symbol-defs.svg#icon-tv"></use>
          </svg>
          <p className={css.textInFilterButton}>TV</p>
        </div>

        {/* Bathroom Filter */}
        <div
          className={`${css.buttonOfFilter} ${filters.bathroom ? css.active : ""}`}
          onClick={() => dispatch(toggleFilter("bathroom"))}
        >
          <svg className={css.iconForVehicleEquipment}>
            <use href="/icons/symbol-defs.svg#icon-bi_droplet"></use>
          </svg>
          <p className={css.textInFilterButton}>Bathroom</p>
        </div>

        {/* Transmission Filter */}
        <div className={css.transmissionFilters}>
          <div
            className={`${css.buttonOfFilter} ${filters.transmission === "Automatic" ? css.active : ""}`}
            onClick={handleTransmissionChange} // Toggle transmission on click
          >
            <svg className={css.iconForVehicleEquipment}>
            <use href="/icons/symbol-defs.svg#icon-diagram"></use>
          </svg>
            <p className={css.textInFilterButton}>Automatic</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleEquipment;