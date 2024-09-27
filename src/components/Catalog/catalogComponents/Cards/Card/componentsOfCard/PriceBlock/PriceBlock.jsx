import css from "./PriceBlock.module.css";
import PropTypes from "prop-types";

function PriceBlock({price}) {
  return (
    <div className={css.priceBlock}>
      <h2 className={css.headerOfCardText}>€{price},00</h2>
      <svg className={css.svgInCard}>
        <use href="/icons/symbol-defs.svg#icon-Property-1Default"></use>
      </svg>
    </div>
  );
}

PriceBlock.propTypes = {
  price: PropTypes.number.isRequired, 
};

export default PriceBlock;
