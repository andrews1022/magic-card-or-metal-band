import { combineReducers } from 'redux';

// reducers
import bandsReducer from './bandsReducer';
import credentialsReducer from './credientialsReducer';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
  bands: bandsReducer,
  credentials: credentialsReducer,
  game: gameReducer
});

export default rootReducer;
