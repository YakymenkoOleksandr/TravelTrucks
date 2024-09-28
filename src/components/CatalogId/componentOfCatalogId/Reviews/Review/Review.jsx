import css from "./Review.module.css";
import PropTypes from "prop-types";

function Review({ reviewer_name, reviewer_rating, comment }) {
  const totalStars = 5;
  return (
    <div className={css.wrapperForReview}>
      <div className={css.horisontal}>
        <div className={css.avatar}>
          <h2 className={css.firstLetterOfName}>{reviewer_name[0]}</h2>
        </div>
        <div>
          <p className={css.name}>{reviewer_name}</p>
          <div className={css.rating}>
            {Array.from({ length: reviewer_rating }).map((_, index) => (
              <svg key={`gold-${index}`} className={css.gold}>
                <use href="/icons/symbol-defs.svg#icon-Property-1Pressed-1"></use>
              </svg>
            ))}

            {Array.from({ length: totalStars - reviewer_rating }).map(
              (_, index) => (
                <svg key={`grey-${index}`} className={css.grey}>
                  <use href="/icons/symbol-defs.svg#icon-Property-1Default-1"></use>
                </svg>
              )
            )}
          </div>
        </div>
      </div>

      <div className={css.wrapperForReviewText}>
        <p className={css.reviewText}>{comment}</p>
      </div>
    </div>
  );
}

Review.propTypes = {
  reviewer_name: PropTypes.string.isRequired,
  reviewer_rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
};

export default Review;
