import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import SterliedHeadphone from '../SterliedHeadphone/SterliedHeadphone';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <SterliedHeadphone></SterliedHeadphone>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;