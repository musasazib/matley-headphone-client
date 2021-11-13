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
        <div className="bg-user-review">
            <h2 className="review-product pt-5 mt-5">User Ratings Are A Confirmation <br /> Of Our Quality</h2>
            <p className="user-review">Risus commodo viverra maecenas accumsan, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas <br/> accumsan lacus vel facilisis.</p>
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