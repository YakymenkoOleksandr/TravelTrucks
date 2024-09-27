import css from "./VehicleEquipment.module.css";

function VehicleEquipment() {
  return (
    <div className={css.wrapperOfVehicleEquipment}>
      <div className={css.wrapperForHeader}>
        <h3 className={css.headerOfVehicleEquipment}>Vehicle equipment</h3>
      </div>
      <div className={css.wrapperForFilterIcons}>
        <div className={css.buttonOfFilter}>
          <svg className={css.iconForVehicleEquipment}>
            <use href="/icons/symbol-defs.svg#icon-wind"></use>
          </svg>
          <p className={css.textInFilterButton}>AC</p>
        </div>
        <div className={css.buttonOfFilter}>
          <svg className={css.iconForVehicleEquipment}>
            <use href="../../../../../public/icons/symbol-defs.svg#icon-diagram"></use>
          </svg>
          <p className={css.textInFilterButton}>Automatic</p>
        </div>
        <div className={css.buttonOfFilter}>
          <svg className={css.iconForVehicleEquipment}>
            <use href="../../../../../public/icons/symbol-defs.svg#icon-Group"></use>
          </svg>
          <p className={css.textInFilterButton}>Kitchen</p>
        </div>
        <div className={css.buttonOfFilter}>
          <svg className={css.iconForVehicleEquipment}>
            <use href="../../../../../public/icons/symbol-defs.svg#icon-tv"></use>
          </svg>
          <p className={css.textInFilterButton}>TV</p>
        </div>
        <div className={css.buttonOfFilter}>
          <svg className={css.iconForVehicleEquipment}>
            <use href="../../../../../public/icons/symbol-defs.svg#icon-bi_droplet"></use>
          </svg>
          <p className={css.textInFilterButton}>Bathroom</p>
        </div>
      </div>
    </div>
  );
}

export default VehicleEquipment;
