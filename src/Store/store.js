import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { raceResultsReducer } from './Reducers/RaceResults';
import { roundsReducer } from './Reducers/RoundReducers';
import {
  latestRaceResultReducer,
  raceResultReducer,
} from './Reducers/RaceResultReducers';
import {
  driverDetailsReducer,
  driversReducer,
  driverStandingsReducer,
} from './Reducers/DriversReducers';
import { teamReducer, teamsReducer } from './Reducers/TeamsReducers';

const reducer = combineReducers({
  raceResults: raceResultsReducer,
  rounds: roundsReducer,
  raceResult: raceResultReducer,
  latestRaceResult: latestRaceResultReducer,
  drivers: driversReducer,
  driverDetails: driverDetailsReducer,
  driverStandings: driverStandingsReducer,
  teams: teamsReducer,
  team: teamReducer,
});

const initialState = {};

const middleware = [thunk];
export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
