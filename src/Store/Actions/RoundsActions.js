import axios from 'axios';
import {
  ROUNDS_FAILURE,
  ROUNDS_REQUEST,
  ROUNDS_SUCCESS,
} from '../Constants/RoundsConstants';

//GET: Rounds for the season
export const roundsAction = (year) => async (dispatch) => {
  console.log('action', year);
  try {
    dispatch({
      type: ROUNDS_REQUEST,
    });

    const options = {
      method: 'GET',
      url: 'https://fia-formula-1-championship-statistics.p.rapidapi.com/api/schedule/race-schedule',

      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Key,
        'X-RapidAPI-Host': process.env.REACT_APP_X_RapidAPI_Host,
      },
    };

    const { data } = await axios.request(options);
    dispatch({ type: ROUNDS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ROUNDS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
