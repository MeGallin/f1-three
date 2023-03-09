import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { raceResultsAction } from '../../Store/Actions/RaceResults';
import './RaceResultsComponent.css';

import { raceResultsData } from '../../Utils/TempData/RaceResults';

const RaceResultsComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const dispatch = useDispatch();

  // const raceResults = useSelector((state) => state.raceResults);
  // const { loading, error, success, raceResults: raceResultsData } = raceResults;

  console.log('comp', raceResultsData);

  const handleYearInput = (e) => {
    setYear(e.target.value);
  };
  const handleForm = (e) => {
    e.preventDefault();
    // dispatch(raceResultsAction(year));
  };

  return (
    <>
      {false ? 'Error component' : null}
      {false && false ? (
        '...loading'
      ) : (
        <>
          <form onSubmit={handleForm}>
            <label htmlFor="year">
              Change the Year
              <input
                type="number"
                id="year"
                name="year"
                value={year}
                placeholder=" year"
                onChange={(e) => handleYearInput(e)}
                required
              />
            </label>

            <button type="submit">Submit</button>
          </form>
          {raceResultsData?.map((result) => (
            <div key={result.grandPrix}>
              <article>
                <header>Header</header>
                Body{result.car}
                <footer>Footer</footer>
              </article>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default RaceResultsComponent;
