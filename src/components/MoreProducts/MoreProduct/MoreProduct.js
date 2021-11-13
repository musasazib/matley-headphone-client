import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const MoreProduct = ({ moreProduct }) => {
    const { _id, picture, ProductName, about } = moreProduct;
    return (
        <div className="pb-3 bg-pd-color">
            <img className="product-img" src={picture} alt="" />
            <h3 className="p-2 color-pd-name">{ProductName}</h3>
            <p className="px-2 about-text">{about}</p>
            <Link to={`/booking/${_id}`}>
                <Button className="btn btn-product">Add to Cart</Button>
            </Link>
        </div>
    );
};

export default MoreProduct;