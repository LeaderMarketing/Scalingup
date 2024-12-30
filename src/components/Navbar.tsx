import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img 
            src="https://jcardenasleader.wordpress.com/wp-content/uploads/2024/12/scaling-up-workshop-logo.png" 
            alt="Verne Logo" 
            style={{ height: '40px' }} // Adjust height as needed
          />
        </Link>

        <button className="navbar-mobile-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><Link to="#about" className="navbar-link">About Verne</Link></li>
            <li><Link to="#workshop" className="navbar-link">Workshop Overview</Link></li>
            <li><Link to="#agenda" className="navbar-link">Agenda</Link></li>
            <li><Link to="#testimonials" className="navbar-link">Testimonials</Link></li>
            <li><Link to="#contact" className="navbar-link">Contact</Link></li>
          </ul>
          <Link to="/register" className="navbar-register">
            Register
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;