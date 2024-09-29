import css from "./ButtonSearch.module.css";
import PropTypes from "prop-types";

function ButtonSearch({ onClick}) {
  return (
    <div className={css.wrapperForButtonSearch}>
      <button className={css.ButtonSearch} onClick={onClick}>
        Search
      </button>
    </div>
  );
}

ButtonSearch.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonSearch;
