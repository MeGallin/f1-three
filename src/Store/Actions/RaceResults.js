import axios from 'axios';
import {
  RACE_RESULTS_FAILURE,
  RACE_RESULTS_REQUEST,
  RACE_RESULTS_SUCCESS,
} from '../Constants/RaceResults';

//GET: User get ip and login hits of user
export const raceResultsAction = (year) => async (dispatch) => {
  console.log('action', year);
  try {
    dispatch({
      type: RACE_RESULTS_REQUEST,
    });

    const options = {
      method: 'GET',
      url: 'https://fia-formula-1-championship-statistics.p.rapidapi.com/api/standings/race-results',
      params: { year: year },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Key,
        'X-RapidAPI-Host': process.env.REACT_APP_X_RapidAPI_Host,
      },
    };

    const { data } = await axios.request(options);
    dispatch({ type: RACE_RESULTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RACE_RESULTS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
