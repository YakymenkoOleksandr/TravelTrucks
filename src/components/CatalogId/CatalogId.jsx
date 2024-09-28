import { useState } from "react";
import css from "../../components/CatalogId/CatalogId.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectVanById } from "../../redux/vansSelectors";
import NameOfVan from "../Catalog/catalogComponents/Cards/Card/componentsOfCard/NameOfVan/NameOfVan";
import BlockReitingRevieusLocation from "../Catalog/catalogComponents/Cards/Card/componentsOfCard/BlockReitingRevieusLocation/BlockReitingRevieusLocation";
import PriceBlock from "../Catalog/catalogComponents/Cards/Card/componentsOfCard/PriceBlock/PriceBlock";
import Forma from "../CatalogId/componentOfCatalogId/Form/Form.jsx";
import Features from "./componentOfCatalogId/Features/Features.jsx";
import Reviews from "./componentOfCatalogId/Reviews/Reviews.jsx";

function CatalogId() {
  const { id } = useParams();
  const van = useSelector((state) => selectVanById(state, id));
  
  const [activeTab, setActiveTab] = useState("features");

  if (!van) {
    return <div>Loading...</div>;
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={css.catalogId}>
      <div>
        <NameOfVan name={van.name} />
        <BlockReitingRevieusLocation
          rating={van.rating}
          amountOfReviews={van.reviews.length}
          location={van.location}
        />
        <div className={css.price}>
          <PriceBlock price={van.price} />
        </div>
      </div>
      <div className={css.galery}>
        {van.gallery.map((image, index) => (
          <img
            key={index}
            src={image.original}
            alt={van.name}
            className={css.galleryImage}
          />
        ))}
      </div>
      <div className={css.description}>
        <p className={css.textOfDescription}>{van.description}</p>
      </div>

      <div className={css.hendlerFeaturesAndReviews}>
        <h3
          className={`${css.features} ${
            activeTab === "features" ? css.activeTab : ""
          }`}
          onClick={() => handleTabClick("features")}
        >
          Features
        </h3>
        <h3
          className={`${css.reviews} ${
            activeTab === "reviews" ? css.activeTab : ""
          }`}
          onClick={() => handleTabClick("reviews")}
        >
          Reviews
        </h3>
      </div>

      <div className={css.FeaturesAndForm}>
        {activeTab === "features" && (
          <Features
            AC={van.AC}
            TV={van.TV}
            bathroom={van.bathroom}
            kitchen={van.kitchen}
            radio={van.radio}
            transmission={van.transmission}
            engine={van.engine}
            form={van.form}
            length={van.length}
            width={van.width}
            height={van.height}
            tank={van.tank}
            consumption={van.consumption}
          />
        )}
        {activeTab === "reviews" && <Reviews reviews={van.reviews} />}
        <Forma />
      </div>
    </div>
  );
}

export default CatalogId;
