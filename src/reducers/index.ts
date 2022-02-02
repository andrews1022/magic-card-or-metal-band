import { combineReducers } from 'redux';

// reducers
import bandReducer from './bandReducer';
import cardReducer from './cardReducer';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
	band: bandReducer,
	card: cardReducer,
	game: gameReducer
});

export default rootReducer;
