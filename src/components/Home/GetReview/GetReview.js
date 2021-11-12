import React from 'react';

const GetReview = ({getReview}) => {
    const { name, review, rating } = getReview;
    return (
        <div className="service-product pb-3">
            <h3 className="p-2">{name}</h3>
            <p className="px-2">{review}</p>
            <p>{rating}</p>
        </div>
    );
};

export default GetReview;