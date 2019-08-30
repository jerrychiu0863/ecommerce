import React from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onNavClick } from '../actions';

const Navbar = props => {
  return (
    <div style={{ boxShadow: '0 2px 5px rgba(0,0,0,.02)' }}>
      <nav className="container">
        <ul className="nav justify-content-center" style={{ magin: '0 auto' }}>
          {props.navs.map(nav => (
            <li className="nav-item active">
              <Link
                to={`/products/${nav.title}`}
                onClick={() => props.onNavClick(nav.title)}
                className={nav.isActive ? 'nav-link nav-link-active' : 'nav-link'}
              >
                {nav.title}
              </Link>
            </li>
          ))}
          {/*<li className="nav-item active">
            <Link
              to="/products/all"
              onClick={() => props.onNavClick('all')}
              className="nav-link"
            >
              All
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products/ring" className="nav-link">
              Rings
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/products/necklace" className="nav-link">
              Necklaces
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/products/earing" className="nav-link">
              Earings
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/products/bracelet" className="nav-link">
              Bracelets
            </Link>
  </li>*/}
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return { navs: state.nav };
};

export default connect(
  mapStateToProps,
  { onNavClick }
)(Navbar);
