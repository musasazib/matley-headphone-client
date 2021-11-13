import React, { useEffect, useState } from 'react';
import './Reviews.css'
import GetReview from '../GetReview/GetReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-garden-68669.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div>
            <div className="review-container">
                {
                    reviews.map(getReview => <GetReview
                        key={getReview._id}
                        getReview={getReview}
                    ></GetReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;