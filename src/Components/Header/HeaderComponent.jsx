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
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? 'active' : '')}
                to="/"
                data-cy="header-home-link"
              >
                home
              </NavLink>
            </li>
            <li>
              {' '}
              <NavLink
                className={(navData) => (navData.isActive ? 'active' : '')}
                to="/about"
                data-cy="header-about-link"
              >
                about
              </NavLink>
            </li>
            <li></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
