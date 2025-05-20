import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assests/circle_logo-removebg-preview.png'; // Ensure path is correct

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: '/about', label: 'ABOUT US' },
    { path: '/contact', label: 'CONTACT US' },
    { path: '/location', label: 'LOCATION' },
    { path: '/help', label: 'HELP' },
  ];

  return (
    <nav className="navbar">
     <Link to="/" className="navbar-left">
        <img
          src={logo}
          alt="Logo"
          className="navbar-logo"
        />
        <div className="navbar-title">
          <h1>MEDSTAR MEDICAL</h1>
          <p>CLINIC & SURGERY</p>
        </div>
      </Link>
      <ul className="navbar-links">
        {navLinks.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={location.pathname === path ? 'active' : ''}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
