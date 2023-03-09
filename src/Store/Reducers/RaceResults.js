import {
  RACE_RESULTS_FAILURE,
  RACE_RESULTS_REQUEST,
  RACE_RESULTS_SUCCESS,
} from '../Constants/RaceResults';

//GET:  race results
export const raceResultsReducer = (state = {}, action) => {
  switch (action.type) {
    case RACE_RESULTS_REQUEST:
      return { loading: true };
    case RACE_RESULTS_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case RACE_RESULTS_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
