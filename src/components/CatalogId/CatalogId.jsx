import css from "../../components/CatalogId/CatalogId.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectVanById } from "../../redux/vansSelectors";
import NameOfVan from "../Catalog/catalogComponents/Cards/Card/componentsOfCard/NameOfVan/NameOfVan";
import BlockReitingRevieusLocation from "../Catalog/catalogComponents/Cards/Card/componentsOfCard/BlockReitingRevieusLocation/BlockReitingRevieusLocation";
import PriceBlock from "../Catalog/catalogComponents/Cards/Card/componentsOfCard/PriceBlock/PriceBlock";
import Form from "../CatalogId/componentOfCatalogId/Form/Form.jsx";
import Features from "./componentOfCatalogId/Features/Features.jsx";

function CatalogId() {
  const { id } = useParams();
  const van = useSelector((state) => selectVanById(state, id));
  console.log(van);

  if (!van) {
    return <div>Loading...</div>;
  }

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
      <div className={css.FeaturesAndForm}>
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
        <Form />
      </div>
    </div>
  );
}

export default CatalogId;
