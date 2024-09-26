import css from "../Header/Header.module.css";

function Header() {
    return (
      
    <div className={css.header}>
      <div className={css.travelTrucks}>
        <span className={css.travel}>Travel</span>
        <span className={css.trucks}>Trucks</span>
      </div>
      <div className={css.navigation}>
        <a className={css.home}>Home</a>
        <a className={css.catalog}>Catalog</a>
      </div>
    </div>
  );
}

export default Header;
