import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './RaceResultComponent.css';

import { raceResultAction } from '../../Store/Actions/RaceResultActions';

import { raceResult } from '../../Utils/TempData/RaceResult';
import { randomId } from '../../Utils/RandomId';
import { yearRegExp } from '../../Utils/regEx';

const RaceResultComponent = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [year, setYear] = useState(new Date().getFullYear());
  const [round] = useState(params.location);

  useEffect(() => {
    //Dispatch Action (Year & round)
    // dispatch(raceResultAction(year, round));
  }, [dispatch, year, round]);
  // const raceResult = useSelector((state) => state.raceResult);
  const { loading, error, location, raceDate, raceResultsFiltered, title } =
    raceResult;

  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handleSubmitAction = () => {
    //Dispatch Action (Year & round)
    // dispatch(raceResultAction(year, round));
  };

  return (
    <>
      {error ? 'Error component' : null}
      {loading ? (
        <span aria-busy="true">...loading</span>
      ) : (
        <>
          <h6>
            {title}
            <sub>{location}</sub>
          </h6>
          <h6>{raceDate}</h6>
          <input
            type="text"
            id="year"
            name="year"
            value={year}
            placeholder="CHANGE THE YEAR"
            onChange={handleYear}
            required
            className={yearRegExp(year) ? 'valid' : 'invalid'}
          />
          <button
            type="submit"
            disabled={!yearRegExp(year)}
            onClick={handleSubmitAction}
          >
            Submit
          </button>

          <div className="race-result-wrapper">
            {raceResultsFiltered?.map((result) => (
              <div key={randomId(8)} className="race-result">
                <div className="race-result-circle">{result.pos}</div>

                <h6>
                  {result.driver.slice(0, -4)}
                  <sup>{result.no}</sup>
                </h6>
                <h6>{result.car}</h6>
                <div className="points-laps-wrapper">
                  <h6>
                    {' '}
                    {result.pts} <sub>points</sub>
                  </h6>
                  <h6>
                    {result.laps} <sub>laps</sub>
                  </h6>
                </div>

                <h6>{result.time_Retired}</h6>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default RaceResultComponent;
