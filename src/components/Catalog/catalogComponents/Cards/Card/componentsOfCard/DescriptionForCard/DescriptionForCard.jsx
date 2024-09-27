import css from "./DescriptionForCard.module.css";
import PropTypes from "prop-types";

function DescriptionForCard({ descriptionForCard }) {
  return <div className={css.description}>{descriptionForCard}</div>;
}

DescriptionForCard.propTypes = {
  descriptionForCard: PropTypes.string.isRequired,
};

export default DescriptionForCard;
