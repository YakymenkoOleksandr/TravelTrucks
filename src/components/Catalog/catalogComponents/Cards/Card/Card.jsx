import css from "./Card.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NameOfVan from "../Card/componentsOfCard/NameOfVan/NameOfVan.jsx";
import PriceBlock from "./componentsOfCard/PriceBlock/PriceBlock.jsx";
import BlockReitingRevieusLocation from "./componentsOfCard/BlockReitingRevieusLocation/BlockReitingRevieusLocation.jsx";
import ComplectationBlock from "./componentsOfCard/СomplectationBlock/СomplectationBlock.jsx";
import DescriptionForCard from "./componentsOfCard/DescriptionForCard/DescriptionForCard.jsx";

function Card({ van }) {
  const thumbPhoto = van.gallery[0].thumb;
  const fullName = van.name;
  const name = cutText(fullName, 25);
  const price = van.price;
  const rating = van.rating;
  const amountOfReviews = van.reviews.length;
  const location = van.location;
  const description = van.description;
  const descriptionForCard = cutText(description, 65);
  const AC = van.AC;
  const TV = van.TV;
  const bathroom = van.bathroom;
  const kitchen = van.kitchen;
  const radio = van.radio;
  const transmission = capitalizeFirstLetter(van.transmission);
  const engine = capitalizeFirstLetter(van.engine);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function cutText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength).trimEnd() + "...";
  }

  return (
    <div className={css.card}>
      <div>
        <img src={thumbPhoto} alt="Photo of van" className={css.photoOfVan} />
      </div>
      <div className={css.info}>
        <div className={css.headerOfCard}>
          <NameOfVan name={name} />
          <PriceBlock price={price} />
        </div>
        <BlockReitingRevieusLocation
          amountOfReviews={amountOfReviews}
          rating={rating}
          location={location}
        />
        <DescriptionForCard descriptionForCard={descriptionForCard} />
        <ComplectationBlock
          AC={AC}
          TV={TV}
          bathroom={bathroom}
          kitchen={kitchen}
          radio={radio}
          transmission={transmission}
          engine={engine}
        />
        <div className={css.blockButtonShowMore}>
          <Link to={`/catalog/${van.id}`}>
            <button className={css.buttonShowMore}>Show more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  van: PropTypes.object.isRequired,
};

export default Card;
