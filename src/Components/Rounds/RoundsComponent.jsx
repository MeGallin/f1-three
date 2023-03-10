import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './RoundsComponent.css';
import moment from 'moment';
import { roundsAction } from '../../Store/Actions/RoundsActions';
import { randomId } from '../../Utils/RandomId';
import useToggle from '../../Utils/Hooks/useToggle';

import {
  nextRoundEvents,
  raceCalendarEvents,
} from '../../Utils/TempData/rounds';

const RoundsComponent = () => {
  //   const dispatch = useDispatch();
  const [showNavigation, setShowNavigation] = useToggle(false);

  const rounds = useSelector((state) => state.rounds);
  const {
    loading,
    error,
    success,
    // raceCalendarEvents: roundsData,
    // nextRoundEvents,
  } = rounds;

  //   console.log(raceCalendarEvents);

  useEffect(() => {
    // dispatch(roundsAction());
  }, []);

  const raceLocations = raceCalendarEvents.map((location) => {
    return location.location;
  });
  let uniqueRaceLocations = Array.from(new Set(raceLocations));

  return (
    <>
      <button type="button" onClick={setShowNavigation}>
        SELECT ROUND
      </button>
      {showNavigation ? (
        <div className="rounds-wrapper">
          <nav>
            {uniqueRaceLocations.map((location) => (
              <ul key={randomId(8)} className="rounds-wrapper-ul">
                <li>
                  <NavLink
                    className={(navData) => (navData.isActive ? 'active' : '')}
                    to={`/round`}
                    data-cy="header-rounds-link"
                    onClick={setShowNavigation}
                  >
                    {location}
                  </NavLink>
                </li>
              </ul>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
};

export default RoundsComponent;
