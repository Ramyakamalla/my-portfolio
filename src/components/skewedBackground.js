import React from 'react';
import '../styless/skewedBackground.css';

const SkewedBackground = ({ children }) => {
  return (
    <div className="skewed-background-container">
      <div className="skewed-background"></div>
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};

export default SkewedBackground;
