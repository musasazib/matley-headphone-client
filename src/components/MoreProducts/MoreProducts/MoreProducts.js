import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import MoreProduct from '../MoreProduct/MoreProduct';


const MoreProducts = () => {
    const [moreProducts, setMoreProducts] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-garden-68669.herokuapp.com/moreProducts')
            .then(res => res.json())
            .then(data => setMoreProducts(data));
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="bg-color">
                <h2 className="text-pd-color pt-5 text-center">Choose Your Headphone</h2>
                <p className="text-center pb-3">Explore the Sound & Quality with the headphones new to the market</p>
                <div className="product-hp-container">
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