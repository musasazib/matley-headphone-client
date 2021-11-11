import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import MoreProduct from '../MoreProduct/MoreProduct';
import './MoreProducts.css'


const MoreProducts = () => {
    const [moreProducts, setMoreProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/moreProducts')
            .then(res => res.json())
            .then(data => setMoreProducts(data));
    }, [])
    return (
        <div>
            <Header></Header>
            <div>
                <h2 className="text-color pt-5 text-center">Latest Headphones</h2>
                <p>Explore the Sound & Quality with the headphones new to the market</p>
                <div className="product-container">
                    {
                        moreProducts.map(moreProduct => <MoreProduct
                            key={moreProduct._id}
                            moreProduct={moreProduct}
                        ></MoreProduct>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MoreProducts;