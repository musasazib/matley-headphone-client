import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-garden-68669.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className="bg-color">
            <h1 className="text-pd-color pt-5 text-center">Latest Headphones</h1>
            <p className="text-center pb-3" >Explore the Sound & Quality with the headphones new to the market</p>
            <div className="product-hp-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;