import {
  RACE_RESULT_FAILURE,
  RACE_RESULT_REQUEST,
  RACE_RESULT_SUCCESS,
} from '../Constants/RaceResultConstants';

//GET:  race result
export const raceResultReducer = (state = {}, action) => {
  switch (action.type) {
    case RACE_RESULT_REQUEST:
      return { loading: true };
    case RACE_RESULT_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case RACE_RESULT_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
