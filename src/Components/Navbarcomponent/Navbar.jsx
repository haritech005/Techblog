import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../Style.css'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header className="navbar-header">
        <h2 className="logo">
          <Link to="/">Dev Diaries</Link>
        </h2>
        <nav className="navbar">
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/categories" className="nav-link">Categories</Link>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/categories/development" className="dropdown-link">Development</Link></li>
                  <li><Link to="/categories/mobiledevelopment" className="dropdown-link">MobileDevelopment</Link></li>
                  <li><Link to="/categories/artificialintlligence" className="dropdown-link">AI</Link></li>
                  <li><Link to="/categories/testing" className="dropdown-link">Testing</Link></li>
                  <li><Link to="/categories/blockchain" className="dropdown-link">Blockchain</Link></li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link to="/resources" className="nav-link">Resources</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
