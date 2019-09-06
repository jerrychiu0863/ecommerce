import React from 'react';
import '../../css/commons/Navbar.css';
import { Link, withRouter } from 'react-router-dom';
import { navs } from '../../config/navs';

const Navbar = props => {
  return (
    <div>
      <nav className="container">
        <ul className="nav justify-content-center" style={{ magin: '0 auto' }}>
          {navs.map(nav => (
            <li className="nav-item active" key={nav.id}>
              <Link
                to={`/products/${nav.title}`}
                className={
                  nav.title === props.location.pathname.substring(10)
                    ? 'nav-link nav-link-active'
                    : 'nav-link'
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

export default withRouter(Navbar);
