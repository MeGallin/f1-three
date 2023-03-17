import axios from 'axios';
import {
  TEAMS_FAILURE,
  TEAMS_REQUEST,
  TEAMS_SUCCESS,
} from '../Constants/TeamsConstants';

//GET: Race result
export const teamsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: TEAMS_REQUEST,
    });

    const options = {
      method: 'GET',
      url: `https://fia-formula-1-championship-statistics.p.rapidapi.com/api/teams`,

      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Key,
        'X-RapidAPI-Host': process.env.REACT_APP_X_RapidAPI_Host,
      },
    };

    const { data } = await axios.request(options);
    dispatch({ type: TEAMS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TEAMS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
