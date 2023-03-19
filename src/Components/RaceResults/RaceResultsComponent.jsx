import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { raceResultsAction } from '../../Store/Actions/RaceResults';
import './RaceResultsComponent.css';

import { yearRegExp } from '../../Utils/regEx';
import { randomId } from '../../Utils/RandomId';
import InputComponent from '../Input/InputComponent';
import FlagsComponent from '../Flags/FlagsComponent';

//Temp data
import { raceResults } from '../../Utils/TempData/RaceResults';

const RaceResultsComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(raceResultsAction(year));
  }, [dispatch, year]);

  // const raceResults = useSelector((state) => state.raceResults);
  const { loading, error, raceResults: raceResultsData } = raceResults;

  const handleYearInput = (e) => {
    setYear(e.target.value);
  };
  const handleForm = (e) => {
    e.preventDefault();
  };

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
          <fieldset className="fieldSet">
            <legend>Results</legend>
            <table role="grid">
              <thead>
                <tr>
                  <th scope="col">ROUND</th>
                  <th scope="col">DATE</th>
                  <th scope="col">WINNER</th>
                  <th scope="col">LAPS</th>
                  <th scope="col">TIME</th>
                </tr>
              </thead>
              <tbody>
                {raceResultsData?.map((result) => (
                  <tr key={randomId(8)}>
                    <td>
                      <FlagsComponent location={result?.grandPrix} />
                      {result?.grandPrix}
                    </td>
                    <td>{result?.date}</td>
                    <td>
                      {result?.winner.firstname} {result?.winner.lastname}
                    </td>
                    <td>{result?.laps}</td>
                    <td>{result?.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>
        </>
      )}
    </>
  );
};

export default RaceResultsComponent;
