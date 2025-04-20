import React from 'react';
import { FaSearch, FaLongArrowAltRight, FaShoppingBasket, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer-container">
        <h2 className="footer-title">How it Works</h2>
        
        <div className="process-flow">
          {/* Search step */}
          <div className="process-step">
            <div className="icon-container">
              <FaSearch className="process-icon" />
            </div>
            <p className="step-text">Find your favorite spot</p>
            <FaLongArrowAltRight className="arrow-icon" />
          </div>

          {/* Basket step */}
          <div className="process-step">
            <div className="icon-container">
              <FaShoppingBasket className="process-icon" />
            </div>
            <p className="step-text">Order in 2 clicks</p>
            <FaLongArrowAltRight className="arrow-icon" />
          </div>

          {/* Location step */}
          <div className="process-step">
            <div className="icon-container">
              <FaMapMarkerAlt className="process-icon" />
            </div>
            <p className="step-text">Track like Uber Eats</p>
          </div>
        </div>

        
      </footer>
    </div>
  );
};

export default Footer;