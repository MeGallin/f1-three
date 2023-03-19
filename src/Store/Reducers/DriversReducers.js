import {
  DRIVERS_FAILURE,
  DRIVERS_REQUEST,
  DRIVERS_STANDINGS_FAILURE,
  DRIVERS_STANDINGS_REQUEST,
  DRIVERS_STANDINGS_SUCCESS,
  DRIVERS_SUCCESS,
  DRIVER_DETAILS_FAILURE,
  DRIVER_DETAILS_REQUEST,
  DRIVER_DETAILS_SUCCESS,
} from '../Constants/DriversConstants';

//GET:  DRIVERS NAMES
export const driversReducer = (state = {}, action) => {
  switch (action.type) {
    case DRIVERS_REQUEST:
      return { loading: true };
    case DRIVERS_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case DRIVERS_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};

//GET:  DRIVER DETAILS
export const driverDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case DRIVER_DETAILS_REQUEST:
      return { loading: true };
    case DRIVER_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case DRIVER_DETAILS_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};

//GET:  DRIVER STANDINGS
export const driverStandingsReducer = (state = {}, action) => {
  switch (action.type) {
    case DRIVERS_STANDINGS_REQUEST:
      return { loading: true };
    case DRIVERS_STANDINGS_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case DRIVERS_STANDINGS_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
