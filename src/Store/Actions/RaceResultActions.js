import axios from 'axios';
import {
  LATEST_RACE_RESULT_FAILURE,
  LATEST_RACE_RESULT_REQUEST,
  LATEST_RACE_RESULT_SUCCESS,
  RACE_RESULT_FAILURE,
  RACE_RESULT_REQUEST,
  RACE_RESULT_SUCCESS,
} from '../Constants/RaceResultConstants';

//GET: Race result
export const raceResultAction = (year, round) => async (dispatch) => {
  try {
    dispatch({
      type: RACE_RESULT_REQUEST,
    });

    const options = {
      method: 'GET',
      url: `https://fia-formula-1-championship-statistics.p.rapidapi.com/api/races/race-results/${year}/${round}`,

      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Key,
        'X-RapidAPI-Host': process.env.REACT_APP_X_RapidAPI_Host,
      },
    };

    const { data } = await axios.request(options);
    dispatch({ type: RACE_RESULT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RACE_RESULT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//GET: Race result
export const latestRaceResultAction = () => async (dispatch) => {
  //http://ergast.com/api/f1/current/last/results.json?callback

  try {
    dispatch({
      type: LATEST_RACE_RESULT_REQUEST,
    });

    const options = {
      method: 'GET',
      url: `../../assets/data/latestResults.json`,
    };

    const { data } = await axios.request(options);
    dispatch({ type: LATEST_RACE_RESULT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LATEST_RACE_RESULT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
