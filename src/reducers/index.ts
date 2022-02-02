import { combineReducers } from 'redux';

// reducers
import credentialsReducer from './credientialsReducer';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
	credentials: credentialsReducer,
	game: gameReducer
});

export default rootReducer;
