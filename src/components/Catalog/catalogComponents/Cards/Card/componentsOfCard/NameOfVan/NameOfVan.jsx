import css from "./NameOfVan.module.css"
import PropTypes from "prop-types";

function NameOfVan({name}) {
    return (
        <h2 className={css.headerOfCardText}>{name}</h2>
    );
}

NameOfVan.propTypes = {
  name: PropTypes.string.isRequired, 
};

export default NameOfVan;