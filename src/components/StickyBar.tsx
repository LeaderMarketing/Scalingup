import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StickyBar.css'; // Create this CSS file for styles

const StickyBar = () => {
  return (
    <div className="sticky-bar">
      This event is by invitation & exclusive to Leader resellers only.{' '}
      <Link to="/contact" className="contact-link">Contact us for help.</Link>
    </div>
  );
};

export default StickyBar; 