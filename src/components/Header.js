import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';

const Header = props => {
  console.log(props.products.length);
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
          <li className="nav-item" style={{ position: 'relative' }}>
            <Link to="/shoppingcart" className="nav-link">
              <i
                className="fas fa-shopping-cart"
                style={{ fontSize: '18px' }}
              ></i>
            </Link>
            {props.products.length !== 0 && (
              <p
                style={{
                  background: 'orange',
                  width: '20px',
                  height: '20px',
                  fontSize: '12px',
                  textAlign: 'center',
                  color: '#f9f9f9',
                  borderRadius: '10px',
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  fontWeight: 'bold'
                }}
              >
                {props.products.length}
              </p>
            )}
          </li>
          <li className="nav-item" style={{ marginLeft: '10px' }}>
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
