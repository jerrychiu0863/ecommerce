import React from 'react';
import '../../css/main/Review.css';
import { reviews } from '../../config/review';

const ReviewDisplay = () => {
  return (
    <React.Fragment>
      <div className="Review container">
        <p
          style={{ paddingLeft: '5px', fontSize: '22px', marginBottom: '10px' }}
        >
          Reviews from Buyers
        </p>
      </div>
      <div className="Review__container container row">
        {reviews.map(review => (
          <div className="ReviewCard col-12 col-sm-6 col-md-4" key={review.id}>
            <div className="ReviewCard__avatar">
              <img
                className="ReviewCard__avatar--img"
                src={require(`../../assets/review/review-${review.id}_60x60.jpg`)}
                alt="avatar"
              />
            </div>
            <p className="ReviewCard--header">
              <b>{review.reviewer}</b> wrote on {review.timeStamp}
            </p>
            <p className="ReviewCard--review">{review.review}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ReviewDisplay;
