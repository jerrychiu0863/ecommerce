import React from 'react';
import '../../css/commons/Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from '../GoogleAuth';

const Header = props => {
  return (
    <header className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          DecoMe
        </Link>
        <ul className="Header__cta">
          <li className="nav-item" style={{ position: 'relative' }}>
            <Link to="/shoppingcart" className="nav-link">
              <i className="Header-shoppingcart fas fa-shopping-cart"></i>
            </Link>
            {props.products.length !== 0 && (
              <p className="Header-count">{props.products.length}</p>
            )}
          </li>
          <li className="nav-item ml-2">
            <GoogleAuth />
          </li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    products: Object.values(state.shoppingcart)
  };
};

export default connect(mapStateToProps)(Header);
