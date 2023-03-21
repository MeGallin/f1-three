import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './DriverStandingsComponent.css';

//Temp data
import { driverStandings } from '../../Utils/TempData/drivers';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { driverStandingsAction } from '../../Store/Actions/DriversActions';

const DriverStandingsComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(driverStandingsAction());
  }, [dispatch]);

  const driverStandings = useSelector((state) => state.driverStandings);
  const { loading, error, MRData } = driverStandings;

  const standingData = MRData?.StandingsTable?.StandingsLists?.flatMap(
    (data) => data.DriverStandings,
  ).filter((standingsFinish) => {
    if (standingsFinish?.points > '0') {
      return standingsFinish;
    }
    return false;
  });

  console.log(standingData);

  const BarWithBorder = (borderHeight, borderColor) => {
    return (props) => {
      const { fill, x, y, width, height } = props;
      return (
        <g>
          <rect
            x={x}
            y={y}
            width={width}
            height={height}
            stroke="none"
            fill={fill}
          />
          <rect
            x={x}
            y={y}
            width={width}
            height={borderHeight}
            stroke="none"
            fill={borderColor}
          />
        </g>
      );
    };
  };

  return (
    <>
      <fieldset className="fieldSet">
        <legend>Championship Standings</legend>

        <div className="graph-wrapper">
          <div
            style={{
              width: '100%',
              height: '360px',
              backgroundColor: 'black',
              position: 'relative',
            }}
          >
            <ResponsiveContainer>
              <BarChart data={standingData}>
                <CartesianGrid strokeDasharray="0.3 3" />
                <XAxis dataKey="Driver.code" tick={{ fill: 'orange' }} />
                <YAxis
                  tick={{ fill: 'orange' }}
                  label={{
                    value: 'points',
                    angle: -90,
                    position: 'insideLeft',
                  }}
                  height={20}
                />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Bar
                  dataKey="points"
                  fill="rgba(51,51,51,1)"
                  shape={BarWithBorder(3, 'orange')}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default DriverStandingsComponent;
