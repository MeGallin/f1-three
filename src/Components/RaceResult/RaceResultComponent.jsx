import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './RaceResultComponent.css';

import {
  raceResultAction,
  latestRaceResultAction,
} from '../../Store/Actions/RaceResultActions';

import { raceResult } from '../../Utils/TempData/RaceResult';
import { randomId } from '../../Utils/RandomId';
import { yearRegExp } from '../../Utils/regEx';
import InputComponent from '../Input/InputComponent';
import FlagsComponent from '../Flags/FlagsComponent';
import TeamLogos from '../TeamLogos/TeamLogos';

const RaceResultComponent = () => {
  const dispatch = useDispatch();

  const latestRaceResult = useSelector((state) => state.latestRaceResult);
  const { loading, error, MRData } = latestRaceResult;

  console.log(MRData);

  useEffect(() => {
    if (!MRData) {
      dispatch(latestRaceResultAction());
    }
  }, [dispatch]);

  const resultsData = MRData?.RaceTable?.Races.flatMap((data) => {
    return data;
  });

  return (
    <>
      {error ? 'Error component' : null}
      {loading ? (
        <span aria-busy="true">...loading</span>
      ) : (
        <>
          <div className="race-result-wrapper">
            {resultsData?.map((result) => (
              <div key={randomId(8)}>
                <fieldset className="fieldSet">
                  <legend>{result?.raceName}</legend>
                  <div className="small-text">
                    Round {result?.round} of {result?.season}{' '}
                    {result?.Circuit.circuitName} {result?.date}
                  </div>
                  <div className="wrapper">
                    {result?.Results?.map((driverRes) => (
                      <div key={randomId(8)} className="item">
                        <div className="result-container">
                          <div className="column">
                            <div className="cell">
                              <h1>{driverRes.position}</h1>
                            </div>
                          </div>

                          <div className="column ">
                            <div className="cell ">
                              {[driverRes.Driver].map((driver) => (
                                <div key={randomId(8)}>
                                  <h6>
                                    Driver <sub>{driverRes?.number}</sub>
                                  </h6>
                                  <div>
                                    {driver?.givenName} {driver?.familyName}
                                  </div>

                                  <div className="flex-wrapper">
                                    <div className="small-text">
                                      {driver.code} [{driver?.permanentNumber}]
                                    </div>
                                    <div>
                                      <FlagsComponent
                                        location={driver?.nationality}
                                      />
                                    </div>
                                  </div>

                                  <div className="constructor-wrapper">
                                    {[driverRes.Constructor].map(
                                      (constructor) => (
                                        <div key={randomId(8)}>
                                          <TeamLogos team={constructor?.name} />
                                        </div>
                                      ),
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="column">
                            {/* <div className="cell">Stats</div> */}
                            <div className="cell">
                              <h6>Stats</h6>
                              <div>Points: {driverRes?.points}</div>

                              {[driverRes.FastestLap].map((fastestLap) => (
                                <div key={randomId(8)}>
                                  <div>Rank: {fastestLap?.rank}</div>
                                  <div className="small-text">
                                    Fastest lap: {fastestLap?.lap}
                                  </div>
                                  <div className="small-text">
                                    Time: {fastestLap?.Time?.time}
                                  </div>
                                  <div className="small-text">
                                    {' '}
                                    {fastestLap?.AverageSpeed?.speed}{' '}
                                    {fastestLap?.AverageSpeed?.units}
                                  </div>
                                </div>
                              ))}
                              {[driverRes?.Time?.time]}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default RaceResultComponent;
