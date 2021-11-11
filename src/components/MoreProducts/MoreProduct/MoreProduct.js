import React from 'react';
import './MoreProduct.css'
import { Link } from 'react-router-dom';

const MoreProduct = ({moreProduct}) => {
    const { _id, picture, ProductName, about } = moreProduct;
    return (
        <div className="service-product pb-3">
            <img className="service-img" src={picture} alt="" />
            <h3 className="p-2">{ProductName}</h3>
            <p className="px-2">{about}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-service">BOOKING</button>
            </Link>
        </div>
    );
};

export default MoreProduct;