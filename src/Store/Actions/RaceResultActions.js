import axios from 'axios';
import {
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
