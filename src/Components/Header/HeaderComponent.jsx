import { NavLink } from 'react-router-dom';
import './HeaderComponent.css';

const HeaderComponent = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <strong>Brand</strong>
            </li>
          </ul>
          <ul>
            <NavLink
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/"
              data-cy="header-home-link"
            >
              home
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/about"
              data-cy="header-about-link"
            >
              about
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
