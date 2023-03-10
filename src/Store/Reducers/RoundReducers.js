import {
  ROUNDS_FAILURE,
  ROUNDS_REQUEST,
  ROUNDS_SUCCESS,
} from '../Constants/RoundsConstants';

//GET:  Rounds
export const roundsReducer = (state = {}, action) => {
  switch (action.type) {
    case ROUNDS_REQUEST:
      return { loading: true };
    case ROUNDS_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ROUNDS_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
