import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
const Rating = ({ rating, children }) => {
  const totalRating = [1, 2, 3, 4, 5];
  return (
    <span className="ratingpro">
      {totalRating.map((rate) =>
        rate <= rating ? (
          <FontAwesomeIcon key={rate} icon={faStar} />
        ) : rating === rate - 0.5 ? (
          <FontAwesomeIcon key={rate} icon={faStarHalfAlt} />
        ) : (
          <FontAwesomeIcon key={rate} icon={farStar} />
        )
      )}
      {children}
    </span>
  );
};

export default Rating;
