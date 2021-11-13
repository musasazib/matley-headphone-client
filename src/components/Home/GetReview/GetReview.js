import React from 'react';
import './GetReview.css'
import Rating from 'react-rating';

const GetReview = ({ getReview }) => {
    const { name, review, rating } = getReview;
    return (
        <div className="review-product pb-3">
            <h3 className="p-2">{name}</h3>
            <Rating
                initialRating={rating}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly></Rating>
            <p className="px-2 user-review">{review}</p>
        </div>
    );
};

export default GetReview;