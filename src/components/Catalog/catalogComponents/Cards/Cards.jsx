import css from "./Cards.module.css";
import PropTypes from "prop-types";
import Card from "../Cards/Card/Card.jsx";

function Cards({ vans, loadMore, hasMore }) {
 
  return (
    <div className={css.wrapperForCards}>
      {vans.map((van) => (
        <div key={van.id}>
          <Card van={van} />
        </div>
      ))}
      {hasMore && ( 
        <div className={css.blockLoadMoreButton}>
          <button className={css.loadMoreButton} onClick={loadMore}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
}

Cards.propTypes = {
  vans: PropTypes.array.isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Cards;
