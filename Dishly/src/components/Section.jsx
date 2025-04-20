import React from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa';
import './Section.css'; // Import the CSS file

const Section = () => {
  return (
    <div className="section-container">
      <div className="main-content">
        {/* Left container (Negative points) */}
        <div className="content-box">
          <h1 className="section-title">Tired of this?</h1>
          
          <div className="points-container">
            <div className="point-item">
              <FaTimes className="icon cancel-icon" />
              <p>Scrolling through endless Whatsapp menus</p>
            </div>
            <div className="point-item">
              <FaTimes className="icon cancel-icon" />
              <p>Waiting 45 mins for a callback to confirm your order</p>
            </div>
            <div className="point-item">
              <FaTimes className="icon cancel-icon" />
              <p>Paying 25% extra for delivery apps.</p>
            </div>
          </div>
        </div>

        {/* Black divider */}
        <div className="divider"></div>

        {/* Right container (Positive points) */}
        <div className="content-box positive-box">
          <h1 className="section-title">Why us?</h1>
          
          <div className="points-container">
            <div className="point-item">
              <FaCheck className="icon check-icon" />
              <p>Browse curated local menus in one place</p>
            </div>
            <div className="point-item">
              <FaCheck className="icon check-icon" />
              <p>Order in 30 seconds, track in real-time.</p>
            </div>
            <div className="point-item">
              <FaCheck className="icon check-icon" />
              <p>More money goes to restaurants, not middlemen.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;