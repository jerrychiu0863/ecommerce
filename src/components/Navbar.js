import React from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onNavClick } from '../actions';

const Navbar = props => {
  return (
    <div>
      <nav className="container">
        <ul className="nav justify-content-center" style={{ magin: '0 auto' }}>
          {props.navs.map(nav => (
            <li className="nav-item active" key={nav.id}>
              <Link
                to={`/products/${nav.title}`}
                onClick={() => props.onNavClick(nav.title)}
                className={
                  nav.isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
              >
                {nav.title}
              </Link>
            </li>
          ))}
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
