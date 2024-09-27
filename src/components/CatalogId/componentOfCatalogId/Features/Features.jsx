import ComplectationBlock from "../../../Catalog/catalogComponents/Cards/Card/componentsOfCard/СomplectationBlock/СomplectationBlock";
import css from "./Features.module.css";
import PropTypes from "prop-types";

function Features({
  AC,
  TV,
  bathroom,
  kitchen,
  radio,
  transmission,
  engine,
  form,
  length,
  width,
  height,
  tank,
  consumption,
}) {
    function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className={css.featuresBlock}>
      <ComplectationBlock
        AC={AC}
        TV={TV}
        bathroom={bathroom}
        kitchen={kitchen}
        radio={radio}
        transmission={capitalizeFirstLetter(transmission)}
        engine={capitalizeFirstLetter(engine)}
      />
      <div>
        <div>
          <h3 className={css.headerOfFeatures}>Vehicle details</h3>
        </div>
        <ul className={css.column}>
          <li className={css.row}>
            <span className={css.property}>Form</span>
            <span>{capitalizeFirstLetter(form)}</span>
          </li>
          <li className={css.row}>
            <span className={css.property}>Length</span>
            <span>{length}</span>
          </li>
          <li className={css.row}>
            <span className={css.property}>Width</span>
            <span>{width}</span>
          </li>
          <li className={css.row}>
            <span className={css.property}>Height</span>
            <span>{height}</span>
          </li>
          <li className={css.row}>
            <span className={css.property}>Tank</span>
            <span>{tank}</span>
          </li>
          <li className={css.row}>
            <span className={css.property}>Consumption</span>
            <span>{consumption}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Features.propTypes = {
  AC: PropTypes.bool.isRequired,
  TV: PropTypes.bool.isRequired,
  bathroom: PropTypes.bool.isRequired,
  kitchen: PropTypes.bool.isRequired,
  radio: PropTypes.bool.isRequired,
  transmission: PropTypes.string.isRequired,
  engine: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  tank: PropTypes.string.isRequired,
  consumption: PropTypes.string.isRequired,
};

export default Features;
