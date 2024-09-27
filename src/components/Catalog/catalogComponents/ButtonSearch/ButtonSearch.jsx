import css from "./ButtonSearch.module.css";

function ButtonSearch() {
  return (
    <div className={css.wrapperForButtonSearch}>
      <button className={css.ButtonSearch}>Search</button>
    </div>
  );
}

export default ButtonSearch;
