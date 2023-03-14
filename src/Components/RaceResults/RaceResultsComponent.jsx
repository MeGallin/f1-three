import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { raceResultsAction } from '../../Store/Actions/RaceResults';
import './RaceResultsComponent.css';
import moment from 'moment';
import { yearRegExp } from '../../Utils/regEx';

import { raceResultsData } from '../../Utils/TempData/RaceResults';
import InputComponent from '../Input/InputComponent';

const RaceResultsComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const dispatch = useDispatch();

  // const raceResults = useSelector((state) => state.raceResults);
  // const { loading, error, success, raceResults: raceResultsData } = raceResults;

  const handleYearInput = (e) => {
    setYear(e.target.value);
  };
  const handleForm = (e) => {
    e.preventDefault();
    // dispatch(raceResultsAction(year));
  };

  const result = raceResultsData.reduce((acc, curr) => {
    const winnerKey = `${curr.winner.abbr} ${curr.winner.firstname} ${curr.winner.lastname}`;
    if (acc[winnerKey]) {
      acc[winnerKey].wins += 1;
    } else {
      acc[winnerKey] = {
        abbr: curr.winner.abbr,
        firstname: curr.winner.firstname,
        lastname: curr.winner.lastname,
        wins: 1,
      };
    }
    return acc;
  }, {});
  const winners = Object.values(result);

  return (
    <>
      {false ? 'Error component' : null}
      {false && false ? (
        '...loading'
      ) : (
        <>
          <form onSubmit={handleForm} className="results-form">
            <InputComponent
              label={'CHANGE THE YEAR'}
              type="text"
              id="year"
              name="year"
              value={year}
              placeholder="CHANGE THE YEAR"
              onChange={(e) => handleYearInput(e)}
              required
              className={
                yearRegExp(year) ? 'input-bg valid' : 'input-bg invalid'
              }
              btnType="submit"
              btnDisabled={!yearRegExp(year)}
            />
          </form>

          <div className="results-summary border-temp">
            <h6>Summary for {year}</h6>
            <div className="grid ">
              {winners.map((wins) => (
                <div key={wins.abbr}>
                  <h6>
                    {wins.firstname} {wins.lastname}
                  </h6>
                  <h5>
                    {wins.wins}
                    <sub>
                      <small>wins</small>
                    </sub>
                  </h5>
                </div>
              ))}
            </div>
          </div>

          {raceResultsData?.map((result) => (
            <div key={result.grandPrix}>
              <article>
                <h4>
                  {result.grandPrix}
                  <sub>
                    <small>GP</small>
                  </sub>
                </h4>

                <h4>
                  <sup>winner</sup> {result.winner.firstname}{' '}
                  {result.winner.lastname}
                </h4>
                <h4>
                  <sup>Team</sup> {result.car}
                </h4>
                <h5>
                  <sup>Laps</sup> {result.laps}
                </h5>

                <p className="small-text">
                  {moment(result.date).format('MMMM Do YYYY, h:mm a')}
                </p>
              </article>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default RaceResultsComponent;
