import { combineReducers } from 'redux';

// reducers
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
	game: gameReducer
});

export default rootReducer;
