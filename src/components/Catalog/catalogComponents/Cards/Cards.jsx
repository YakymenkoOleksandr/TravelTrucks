import css from "./Cards.module.css";
import PropTypes from "prop-types";
import Card from "../Cards/Card/Card.jsx";

function Cards({ vans }) {
  return (
    <div className={css.wrapperForCards}>
      {vans.map((van) => (
        <div key={van.id}>
          <Card van={van} />
        </div>
      ))}
    </div>
  );
}

Cards.propTypes = {
  vans: PropTypes.array.isRequired, 
};

export default Cards;
