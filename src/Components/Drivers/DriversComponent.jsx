import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  driverDetailsAction,
  driversAction,
} from '../../Store/Actions/DriversActions';
import { randomId } from '../../Utils/RandomId';

import { drivers, driverDetails } from '../../Utils/TempData/drivers';

const DriversComponent = () => {
  const dispatch = useDispatch();

  //   const drivers = useSelector((state) => state.drivers);
  const { loading, error, drivers: driversData } = drivers;

  useEffect(() => {
    //Dispatch Action
    // dispatch(driversAction());
  }, [dispatch, drivers]);

  const handleDriversDetails = (driversName) => {
    //Action to fetch driver details
    const fullNameString = Object.values(driversName)
      .join('')
      .toLocaleLowerCase();
    // dispatch(driverDetailsAction(fullNameString));
    const {
      loading: driverDetailsLoading,
      error: driverDetailsError,
      driverDetails: driverDetailsData,
    } = driverDetails;
    console.log(driverDetailsData);
  };

  //   const driverDetails = useSelector((state) => state.driverDetails);
  //   const {
  //     loading: driverDetailsLoading,
  //     error: driverDetailsError,
  //     driverDetails: driverDetailsData,
  //   } = driverDetails;

  return (
    <>
      <fieldset className="fieldSet">
        <legend>Drivers</legend>

        <table role="grid">
          <thead>
            <tr>
              <th scope="col">RANKING</th>
              <th scope="col">DRIVER</th>
              <th scope="col">PTS</th>
            </tr>
          </thead>
          <tbody>
            {driversData?.map((driver) => (
              <tr key={randomId(8)}>
                <td>{driver?.rank}</td>
                <td>
                  <span
                    onClick={() =>
                      handleDriversDetails({
                        name: driver?.firstname,
                        lastName: driver?.lastname,
                      })
                    }
                  >
                    {driver?.firstname} {driver?.lastname}
                  </span>
                </td>
                <td>{driver?.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </fieldset>
    </>
  );
};

export default DriversComponent;
