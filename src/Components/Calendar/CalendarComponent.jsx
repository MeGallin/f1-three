import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CalendarComponent.css';
import { randomId } from '../../Utils/RandomId';
import moment from 'moment';

import {
  nextRoundEvents,
  raceCalendarEvents,
} from '../../Utils/TempData/rounds';

const CalendarComponent = () => {
  const [showInfo, setShowInfo] = useState([{}]);

  const raceLocations = raceCalendarEvents?.map((location) => {
    return { location: location.location, startDate: location.startDate };
  });
  const uniqueRaceLocations = Array.from(new Set(raceLocations));

  const uniqueLocations = new Set();
  const filteredLocations = uniqueRaceLocations.filter((item) => {
    if (!uniqueLocations.has(item.location)) {
      uniqueLocations.add(item.location);
      return true;
    }
    return false;
  });

  const handleShowInfo = (location) => {
    raceCalendarEvents.filter((loc) => {
      if (location === loc.location) {
        setShowInfo([loc]);
      }
    });
  };

  const {
    location: showInfoLocation,
    summary,
    organizer,
    startDate,
    endDate,
  } = showInfo[0];

  return (
    <>
      <div>
        <h1>
          F1 Calendar <sub>[{moment().format('YYYY')}]</sub>{' '}
        </h1>
        {filteredLocations?.map((location) => (
          <div key={randomId(8)}>
            <div onClick={() => handleShowInfo(location?.location)}>
              <span
                className={`${
                  moment(location?.startDate) < moment()
                    ? 'calendar-location calendar-event-done'
                    : 'calendar-location'
                }`}
              >
                {location?.location}
              </span>
            </div>

            {showInfoLocation === location.location ? (
              <>
                <fieldset className="fieldSet">
                  <legend>{location.location || showInfoLocation}</legend>
                  <div className="location-info-wrapper">
                    <h3>
                      {' '}
                      {summary}
                      <sub>{organizer}</sub>
                    </h3>

                    <h3>
                      RACE DAY in:{' '}
                      <sup>
                        {moment(startDate).diff(moment(), 'days')} days.
                      </sup>
                    </h3>
                    <div className="location-info-dates-wrapper">
                      <div>
                        START:{' '}
                        {moment(startDate).format(
                          'dddd, MMMM Do YYYY, h:mm:ss a',
                        )}
                      </div>
                      <div>
                        END:{' '}
                        {moment(endDate).format(
                          'dddd, MMMM Do YYYY, h:mm:ss a',
                        )}
                      </div>
                    </div>
                  </div>
                </fieldset>
              </>
            ) : null}

            {/* {showInfo?.map((info) =>
              location?.location === info.location ? (
                <div key={info.location}>
                  <fieldset className="fieldSet">
                    <legend>{location || info.location}</legend>
                    <div className="location-info-wrapper">
                      <h3>
                        {' '}
                        {info.summary}
                        <sub>{info.organizer}</sub>
                      </h3>
                      {moment(info.startDate) < moment()
                        ? 'Gone'
                        : 'still coming'}
                      <h3>
                        RACE DAY in:{' '}
                        <sup>
                          {moment(info.startDate).diff(moment(), 'days')} days.
                        </sup>
                      </h3>
                      <div className="location-info-dates-wrapper">
                        <div>
                          START:{' '}
                          {moment(info.startDate).format(
                            'dddd, MMMM Do YYYY, h:mm:ss a',
                          )}
                        </div>
                        <div>
                          END:{' '}
                          {moment(info.endDate).format(
                            'dddd, MMMM Do YYYY, h:mm:ss a',
                          )}
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              ) : null,
            )} */}
          </div>
        ))}
      </div>
    </>
  );
};

export default CalendarComponent;