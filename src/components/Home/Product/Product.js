import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const { _id, img, placeName, description } = product;
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

export default Product;