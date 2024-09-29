import css from "./Reviews.module.css";
import PropTypes from "prop-types";
import Review from "../Reviews/Review/Review.jsx";

function Reviews({ reviews }) {
  return (
    <div className={css.blockOfReviews}>
      <div className={css.avatarReitingStarsBlock}>
        {reviews.map((review, index) => (
          <Review
            key={index}
            reviewer_name={review.reviewer_name}
            reviewer_rating={review.reviewer_rating}
            comment={review.comment}
          />
        ))}
      </div>
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default Reviews;
