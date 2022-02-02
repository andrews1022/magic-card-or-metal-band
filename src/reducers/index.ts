import { combineReducers } from 'redux';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
	games: gameReducer
});

export default rootReducer;
