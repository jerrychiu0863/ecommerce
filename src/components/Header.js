import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <header className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          DecoMe
        </Link>
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            margin: '0',
            alignItems: 'center'
          }}
        >
          <li className="nav-item">
            <Link to="/shopping-cart" className="nav-link">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
          <li className="nav-item">
            <GoogleAuth />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
