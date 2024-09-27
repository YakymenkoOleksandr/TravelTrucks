import css from "../../components/CatalogId/CatalogId.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectVanById } from "../../redux/vansSelectors";
import NameOfVan from "../Catalog/catalogComponents/Cards/Card/componentsOfCard/NameOfVan/NameOfVan";
import BlockReitingRevieusLocation from "../Catalog/catalogComponents/Cards/Card/componentsOfCard/BlockReitingRevieusLocation/BlockReitingRevieusLocation";
import PriceBlock from "../Catalog/catalogComponents/Cards/Card/componentsOfCard/PriceBlock/PriceBlock";

function CatalogId() {
  const { id } = useParams();
  const van = useSelector((state) => selectVanById(state, id));

  console.log("Selected van:", van);

  if (!van) {
    return <div>Loading...</div>;
  }

  return (
    <div className={css.catalogId}>
      <NameOfVan name={van.name} />
      <BlockReitingRevieusLocation
        rating={van.rating}
        amountOfReviews={van.reviews.length}
        location={van.location}
      />
      <PriceBlock price={van.price} />
    </div>
  );
}

export default CatalogId;

/*<h1>{van.name}</h1>
            <img src={van.gallery[0].thumb} alt={van.name} />
            <p>Price: €{van.price},00</p>
            
            <p>Description: {van.description}</p>*/
