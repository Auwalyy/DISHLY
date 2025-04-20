import React from 'react';
import './Copy.css';

const Copy = () => {
  return (
    <div className="copy-container">
      <div className="copyright">
        <p>© {new Date().getFullYear()} Dishly. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Copy;