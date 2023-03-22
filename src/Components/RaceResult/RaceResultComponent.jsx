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
                <h6 className="center-text race-result-h6">
                  {result?.raceName}{' '}
                  <sub>
                    Round {result?.round} of {result?.season}
                  </sub>
                  <sup>{result?.Circuit.circuitName}</sup>
                </h6>
                <h6 className="center-text race-result-h6">
                  {result?.Circuit.circuitName} <sub>{result?.date}</sub>
                  <sup>{result?.time}</sup>
                </h6>
                <fieldset className="fieldSet">
                  <legend>Result</legend>
                  <div className="wrapper">
                    {result?.Results?.map((driverRes) => (
                      <div key={randomId(8)} className="item">
                        <div className="race-result-circle">
                          {driverRes.position}
                        </div>
                        # {driverRes?.number}
                        points:
                        {driverRes?.points}
                        {[driverRes.Driver].map((driver) => (
                          <div key={randomId(8)}>
                            {driver?.code}
                            {driver?.givenName}
                            {driver?.dateOfBirth}
                            {driver?.nationality}
                            {driver?.permanentNumber}
                          </div>
                        ))}
                        {[driverRes.Constructor].map((constructor) => (
                          <div key={randomId(8)}>
                            {constructor?.name}
                            {constructor?.nationality}
                          </div>
                        ))}
                        {[driverRes?.Time?.time]}
                        {[driverRes.FastestLap].map((fastestLap) => (
                          <div key={randomId(8)}>
                            {fastestLap?.AverageSpeed?.speed}
                            {fastestLap?.AverageSpeed?.units}
                            time: {fastestLap?.Time?.time}
                            lap: {fastestLap?.lap}
                            rank: {fastestLap?.rank}
                          </div>
                        ))}
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
