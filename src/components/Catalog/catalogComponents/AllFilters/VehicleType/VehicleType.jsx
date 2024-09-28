import css from "./VehicleType.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../../../../../redux/vansSlice.js";
function VehicleType() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.vans.filters);

  const handleFilterClick = (filterName) => {
    dispatch(toggleFilter(filterName));
  };


  return (
    <div className={css.wrapperForVehicleType}>
      <div className={css.wrapperForHeader}>
        <h3 className={css.headerOfVehicleType}>Vehicle type</h3>
      </div>
      <div className={css.wrapperForFilterIcons}>
        <div
          className={`${css.buttonOfFilter} ${filters.isVan ? css.active : ""}`}
          onClick={() => handleFilterClick("isVan")} 
        >
          <svg className={css.iconForVehicleType}>
            <use href="/icons/symbol-defs.svg#icon-bi_grid-1x2"></use>
          </svg>
          <p className={css.textInFilterButton}>Van</p>
        </div>
        <div
          className={`${css.buttonOfFilter} ${
            filters.isFullyIntegrated ? css.active : ""
          }`}
          onClick={() => handleFilterClick("isFullyIntegrated")} 
        >
          <svg className={css.iconForVehicleType}>
            <use href="/icons/symbol-defs.svg#icon-bi_grid"></use>
          </svg>
          <p className={css.textInFilterButton}>
            Fully <br />
            Integrated
          </p>
        </div>
        <div
          className={`${css.buttonOfFilter} ${
            filters.isAlcove ? css.active : ""
          }`}
          onClick={() => handleFilterClick("isAlcove")}
        >
          <svg className={css.iconForVehicleType}>
            <use href="/icons/symbol-defs.svg#icon-bi_grid-3x3-gap"></use>
          </svg>
          <p className={css.textInFilterButton}>Alcove</p>
        </div>
      </div>
    </div>
  );
}

export default VehicleType;
