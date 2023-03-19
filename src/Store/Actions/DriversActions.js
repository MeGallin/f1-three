import axios from 'axios';
import {
  DRIVERS_FAILURE,
  DRIVERS_REQUEST,
  DRIVERS_STANDINGS_FAILURE,
  DRIVERS_STANDINGS_REQUEST,
  DRIVERS_STANDINGS_SUCCESS,
  DRIVERS_SUCCESS,
  DRIVER_DETAILS_FAILURE,
  DRIVER_DETAILS_REQUEST,
  DRIVER_DETAILS_SUCCESS,
} from '../Constants/DriversConstants';

//GET: Race result
export const driversAction = () => async (dispatch) => {
  try {
    dispatch({
      type: DRIVERS_REQUEST,
    });

    const options = {
      method: 'GET',
      url: `https://fia-formula-1-championship-statistics.p.rapidapi.com/api/drivers`,

      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Key,
        'X-RapidAPI-Host': process.env.REACT_APP_X_RapidAPI_Host,
      },
    };

    const { data } = await axios.request(options);
    dispatch({ type: DRIVERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DRIVERS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//GET: Race result
export const driverDetailsAction = (driversName) => async (dispatch) => {
  try {
    dispatch({
      type: DRIVER_DETAILS_REQUEST,
    });

    const options = {
      method: 'GET',
      url: `https://fia-formula-1-championship-statistics.p.rapidapi.com/api/drivers/details/${driversName}`,

      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Key,
        'X-RapidAPI-Host': process.env.REACT_APP_X_RapidAPI_Host,
      },
    };

    const { data } = await axios.request(options);
    dispatch({ type: DRIVER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DRIVER_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//GET: Driver standings
export const driverStandingsAction = (year) => async (dispatch) => {
  try {
    dispatch({
      type: DRIVERS_STANDINGS_REQUEST,
    });

    const options = {
      method: 'GET',
      url: `https://fia-formula-1-championship-statistics.p.rapidapi.com/api/standings/drivers-standings`,
      params: { year: year },

      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Key,
        'X-RapidAPI-Host': process.env.REACT_APP_X_RapidAPI_Host,
      },
    };

    const { data } = await axios.request(options);
    dispatch({ type: DRIVERS_STANDINGS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DRIVERS_STANDINGS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
