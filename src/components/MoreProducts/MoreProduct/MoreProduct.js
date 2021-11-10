import React from 'react';
import './MoreProduct.css'
import { Link } from 'react-router-dom';

const MoreProduct = ({moreProduct}) => {
    const { _id, img, placeName, description } = moreProduct;
    return (
        <div className="service-product pb-3">
            <img className="service-img" src={img} alt="" />
            <h3 className="p-2">{placeName}</h3>
            <p className="px-2">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-service">BOOKING</button>
            </Link>
        </div>
    );
};

export default MoreProduct;