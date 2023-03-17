import {
  TEAMS_FAILURE,
  TEAMS_REQUEST,
  TEAMS_SUCCESS,
  TEAM_FAILURE,
  TEAM_REQUEST,
  TEAM_SUCCESS,
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

//GET:  TEAMS NAMES
export const teamReducer = (state = {}, action) => {
  switch (action.type) {
    case TEAM_REQUEST:
      return { loading: true };
    case TEAM_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case TEAM_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
