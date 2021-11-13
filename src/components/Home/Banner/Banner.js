import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner from '../../../images/banar.jpg'

const Banner = () => {
    return (
        <>
            <Carousel className="banner">
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div>
                            <h2 className="body-text-banner">Find Best</h2>
                            <h1 className="header-style">Refresh your
                                state of mind.</h1>
                            <h5 className="body-text-banner">Headphones that make music sound like a celebration and pleasant experience.</h5>
                            <button className="btn all-btn banner-btn">LEARN MORE</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2 className="body-text-banner">Live Smart</h2>
                        <h1 className="header-style">Hear Smart</h1>
                        <h5 className="body-text-banner">Stylish, folded design with active noise cancellation for crystal clear audio 3.5mm  Wired or Bluetooth wireless conncectivity</h5>
                        <button className="btn all-btn banner-btn">LEARN MORE</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h2 className="body-text-banner">Less Noise</h2>
                        <h1 className="header-style">More Sound</h1>
                        <h5 className="body-text-banner">
                            Headphones that make you forget everything around. Make music come to life.
                        </h5>
                        <button className="btn all-btn banner-btn">LEARN MORE</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;