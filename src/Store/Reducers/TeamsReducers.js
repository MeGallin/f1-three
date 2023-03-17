import {
  TEAMS_FAILURE,
  TEAMS_REQUEST,
  TEAMS_SUCCESS,
} from '../Constants/TeamsConstants';

//GET:  TEAMS NAMES
export const teamsReducer = (state = {}, action) => {
  switch (action.type) {
    case TEAMS_REQUEST:
      return { loading: true };
    case TEAMS_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case TEAMS_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
