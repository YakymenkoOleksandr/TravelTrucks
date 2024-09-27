import css from "./Card.module.css";
import PropTypes from "prop-types";
import { BsMap } from "react-icons/bs";

function Card({ van }) {
  console.log(van);

  const thumbPhoto = van.gallery[0].thumb;
  const name = van.name;
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
          <h2 className={css.headerOfCardText}>{name}</h2>
          <div className={css.priceBlock}>
            <h2 className={css.headerOfCardText}>€{price}</h2>
            <svg className={css.svgInCard}>
              <use href="/icons/symbol-defs.svg#icon-Property-1Default"></use>
            </svg>
          </div>
        </div>
        <div className={css.blockReitingRevieusLocation}>
          <svg className={css.svgReiting}>
            <use href="/icons/symbol-defs.svg#icon-Property-1Pressed-1"></use>
          </svg>
          <p className={css.raitingString}>
            {rating}({amountOfReviews} Reviews)
          </p>
          <BsMap className={css.iconOfMap} />
          <p className={css.location}>{location}</p>
        </div>
        <div className={css.description}>{descriptionForCard}</div>
        <div className={css.complectationBlock}>
          <div className={css.transmission}>
            <svg className={css.iconForVehicleEquipment}>
              <use href="/icons/symbol-defs.svg#icon-diagram"></use>
            </svg>
            <p className={css.textEquipment}>{transmission}</p>
          </div>

          <div className={css.engine}>
            <svg className={css.iconForVehicleEquipment}>
              <use href="/icons/symbol-defs.svg#icon-fuel-pump"></use>
            </svg>
            <p className={css.textEquipment}>{engine}</p>
          </div>
          {kitchen && (
            <div className={css.kitchen}>
              <svg className={css.iconForVehicleEquipment}>
                <use href="/icons/symbol-defs.svg#icon-cup-hot"></use>
              </svg>
              <p className={css.textEquipment}>Kitchen</p>
            </div>
          )}
          {AC && (
            <div className={css.AC}>
              <svg className={css.iconForVehicleEquipment}>
                <use href="/icons/symbol-defs.svg#icon-wind"></use>
              </svg>
              <p className={css.textEquipment}>AC</p>
            </div>
          )}
          {TV && (
            <div className={css.TV}>
              <svg className={css.iconForVehicleEquipment}>
                <use href="/icons/symbol-defs.svg#icon-tv"></use>
              </svg>
              <p className={css.textEquipment}>TV</p>
            </div>
          )}
          {bathroom && (
            <div className={css.bathroom}>
              <svg className={css.iconForVehicleEquipment}>
                <use href="/icons/symbol-defs.svg#icon-bi_droplet"></use>
              </svg>
              <p className={css.textEquipment}>Bathroom</p>
            </div>
          )}
          {radio && (
            <div className={css.radio}>
              <svg className={css.iconForVehicleEquipment}>
                <use href="/icons/symbol-defs.svg#icon-ui-radios"></use>
              </svg>
              <p className={css.textEquipment}>Radio</p>
            </div>
          )}
              </div>
              <div className={css.blockButtonShowMore}>
                  <button className={css.buttonShowMore}>Show more</button>
              </div>
                  
      </div>
    </div>
  );
}

Card.propTypes = {
  van: PropTypes.array.isRequired,
};

export default Card;
