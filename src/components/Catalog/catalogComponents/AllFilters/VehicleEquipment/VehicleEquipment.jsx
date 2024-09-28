import css from "./VehicleEquipment.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter, setTransmission } from "../../../../../redux/vansSlice.js";

function VehicleEquipment() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.vans.filters);

  const handleTransmissionChange = () => {
    const newTransmission = filters.Transmission === "Manual" ? "Automatic" : "Manual";
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
          className={`${css.buttonOfFilter} ${filters.Kitchen ? css.active : ""}`}
          onClick={() => dispatch(toggleFilter("Kitchen"))}
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
          className={`${css.buttonOfFilter} ${filters.Bathroom ? css.active : ""}`}
          onClick={() => dispatch(toggleFilter("Bathroom"))}
        >
          <svg className={css.iconForVehicleEquipment}>
            <use href="/icons/symbol-defs.svg#icon-bi_droplet"></use>
          </svg>
          <p className={css.textInFilterButton}>Bathroom</p>
        </div>

        {/* Transmission Filter */}
        <div className={css.transmissionFilters}>
          <div
            className={`${css.buttonOfFilter} ${filters.Transmission === "Automatic" ? css.active : ""}`}
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