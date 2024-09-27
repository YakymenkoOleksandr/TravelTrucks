import css from "./VehicleType.module.css";

function VehicleType() {
  return (
    <div className={css.wrapperForVehicleType}>
      <div className={css.wrapperForHeader}>
        <h3 className={css.headerOfVehicleType}>Vehicle type</h3>
      </div>
      <div className={css.wrapperForFilterIcons}>
        <div className={css.buttonOfFilter}>
          <svg className={css.iconForVehicleType}>
            <use href="/icons/symbol-defs.svg#icon-bi_grid-1x2"></use>
          </svg>
          <p className={css.textInFilterButton}>Van</p>
        </div>
        <div className={css.buttonOfFilter}>
          <svg className={css.iconForVehicleType}>
            <use href="/icons/symbol-defs.svg#icon-bi_grid"></use>
          </svg>
          <p className={css.textInFilterButton}>
            Fully <br />
            Integrated
          </p>
        </div>
        <div className={css.buttonOfFilter}>
          <svg className={css.iconForVehicleType}>
            <use href="/icons/symbol-defs.svg#icon-bi_grid-3x3-gap"></use>
          </svg>
          <p className={css.textInFilterButton}>Kitchen</p>
        </div>
      </div>
    </div>
  );
}

export default VehicleType;
