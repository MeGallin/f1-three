import { useState } from 'react';
import './DriverStandingsComponent.css';
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

const DriverStandingsComponent = () => {
  const {
    loading,
    title,
    driverStandings: driverStandingsData,
  } = driverStandings;

  const data = driverStandingsData?.map((standings) => {
    console.log(standings);
    if (standings?.pts > 0) {
      return {
        name: standings?.driver.abbr,
        points: standings?.pts,
      };
    }
  });
  const filteredData = data.filter(
    (item) => item !== null && item !== undefined,
  );

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
        <legend>{title}</legend>

        <div className="graph-wrapper">
          <div
            style={{
              width: '100%',
              height: 360,
              backgroundColor: 'black',
            }}
          >
            <ResponsiveContainer>
              <BarChart data={filteredData}>
                <CartesianGrid strokeDasharray="0.3 3" />
                <XAxis dataKey="name" tick={{ fill: 'orange' }} />
                <YAxis tick={{ fill: 'orange' }} />
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
