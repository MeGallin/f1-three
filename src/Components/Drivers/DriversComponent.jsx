import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './DriversComponent.css';
import {
  driverDetailsAction,
  driversAction,
} from '../../Store/Actions/DriversActions';
import { randomId } from '../../Utils/RandomId';
import FlagsComponent from '../Flags/FlagsComponent';
import ModalComponent from '../Modal/ModalComponent';
// Temp data
import { drivers, driverDetails } from '../../Utils/TempData/drivers';

const DriversComponent = () => {
  const dispatch = useDispatch();

  // const drivers = useSelector((state) => state.drivers);
  const { loading, error, drivers: driversData } = drivers;

  useEffect(() => {
    //Dispatch Action
    if (!driverDetails) {
      // dispatch(driversAction());
    }
  }, [dispatch]);

  const handleDriversDetails = (e, driversName) => {
    e.stopPropagation();
    //Action to fetch driver details
    const fullNameString = Object.values(driversName)
      .join('')
      .toLocaleLowerCase();
    // dispatch(driverDetailsAction(fullNameString));
  };

  // const driverDetails = useSelector((state) => state.driverDetails);
  const {
    loading: driverDetailsLoading,
    error: driverDetailsError,
    driverDetails: driverDetailsData,
  } = driverDetails;

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
                  <div
                    onClick={(e) =>
                      handleDriversDetails(e, {
                        name: driver?.firstname,
                        lastName: driver?.lastname,
                      })
                    }
                  >
                    <ModalComponent
                      closeButtonTitle="Close"
                      openButtonTitle={
                        driver?.firstname + ' ' + driver?.lastname
                      }
                      title="DRIVER DETAILS"
                      content={
                        <>
                          <div className="driver-modal-personal-details">
                            <FlagsComponent
                              location={driverDetailsData?.country}
                            />
                            <h6>
                              {driverDetailsData?.firstname}{' '}
                              {driverDetailsData?.lastname}
                            </h6>
                            <div>
                              {driverDetailsData?.country} {''}{' '}
                              {driverDetailsData?.placeOfBirth}
                            </div>{' '}
                            <div>{driverDetailsData?.dateOfBirth} </div>
                          </div>

                          <div className="driver-modal-race-details">
                            <p>
                              World Titles:{' '}
                              {driverDetailsData?.worldChampionships}
                            </p>
                            <p>Podiums: {driverDetailsData?.podiums}</p>
                            <p>
                              Highest race finishes:{' '}
                              {driverDetailsData?.highestRaceFinish}
                            </p>
                            <p>
                              Highest grid position:{' '}
                              {driverDetailsData?.highestGridPosition}
                            </p>
                            <p>
                              GP's entered:
                              {driverDetailsData?.grandsPrixEntered}
                            </p>

                            <p>Current Team: {driverDetailsData?.team}</p>
                          </div>
                        </>
                      }
                    />
                  </div>
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
