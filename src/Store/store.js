import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { raceResultsReducer } from './Reducers/RaceResults';
import { roundsReducer } from './Reducers/RoundReducers';
import { raceResultReducer } from './Reducers/RaceResultReducers';
import {
  driverDetailsReducer,
  driversReducer,
} from './Reducers/DriversReducers';

const reducer = combineReducers({
  raceResults: raceResultsReducer,
  rounds: roundsReducer,
  raceResult: raceResultReducer,
  drivers: driversReducer,
  driverDetails: driverDetailsReducer,
});

const initialState = {};

const middleware = [thunk];
export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
