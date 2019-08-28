import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ boxShadow: '0 2px 5px rgba(0,0,0,.02)' }}>
      <nav className="container">
        <ul className="nav justify-content-center" style={{ magin: '0 auto' }}>
          <li className="nav-item active">
            <Link to="/products/all" className="nav-link">
              All
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products/rings" className="nav-link">
              Rings
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/products/necklaces" className="nav-link">
              Necklaces
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/products/earings" className="nav-link">
              Earings
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/products/bracelets" className="nav-link">
              Bracelets
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
