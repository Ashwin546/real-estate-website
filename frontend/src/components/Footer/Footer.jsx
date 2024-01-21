// Footer.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you are using React Router
import './Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer-container">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
      <p className="footer-text">© 2024 Your Website Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
