import { NavLink } from 'react-router-dom';
import RoundsComponent from '../Rounds/RoundsComponent';
import './HeaderComponent.css';

const HeaderComponent = () => {
  return (
    <>
      <header>
        <nav>
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
                to="/calendar"
                data-cy="header-calendar-link"
              >
                calendar
              </NavLink>
            </li>
            <li>
              {' '}
              <NavLink
                className={(navData) => (navData.isActive ? 'active' : '')}
                to="/drivers"
                data-cy="header-drivers-link"
              >
                drivers
              </NavLink>
            </li>
            <li>
              {' '}
              <NavLink
                className={(navData) => (navData.isActive ? 'active' : '')}
                to="/teams"
                data-cy="header-teams-link"
              >
                teams
              </NavLink>
            </li>
          </ul>
        </nav>
        <RoundsComponent />
      </header>
    </>
  );
};

export default HeaderComponent;
