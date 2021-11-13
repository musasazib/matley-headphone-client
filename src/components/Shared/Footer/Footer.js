import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark text-light pt-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3 text-start">
                            <img className="image-style" src="https://i.ibb.co/YdmhFHW/comfort-ever-360x.png" alt="" style={{ width: "125px" }} />
                            <p>Copyright © 2019 | All Rights Reserved.</p>
                            <hr />
                        </div>
                        <div className="col-12 col-md-3 footer-text-all">
                            <h4 className="footer-text footer-h2">Quick Links</h4>
                            <p className="footer-text">- Home</p>
                            <p className="footer-text">- Term</p>
                            <p className="footer-text">- Privacy & Policy</p>
                            <p className="footer-text">- Blog</p>
                            <p className="footer-text">- Contact Us</p>
                            <hr />
                        </div>
                        <div className="col-12 col-md-3 footer-text-all">
                            <h4 className="footer-text footer-h2">About Us</h4>
                            <p className="footer-text">Our Story</p>
                            <p className="footer-text">Information</p>
                            <p className="footer-text">Working With Us</p>
                            <p className="footer-text">Shipping Details</p>
                            <p className="footer-text">Be Our Partner</p>
                            <hr />
                        </div>
                        <div className="col-12 col-md-3 footer-text-all">
                            <h4 className="footer-text footer-h2">Support</h4>
                            <p className="footer-text">- Customer Support</p>
                            <p className="footer-text">- Privacy & Policy</p>
                            <p className="footer-text">- Terms & Condition</p>
                            <p className="footer-text">- Order Return</p>
                            <p className="footer-text">- Online Payment</p>
                            {/* <img src={image} alt="" /> */}
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;