/* eslint-disable default-param-last */

import { GameActions, GameState } from '../types/types';

const intialGameState: GameState = {
	correctAnswer: false,
	hasSelected: false,
	isGameBeingPlayed: false,
	wasGuessedCorrectly: false
};

const gameReducer = (state: GameState = intialGameState, action: GameActions): GameState => {
	switch (action.type) {
		case 'INIT':
			return {
				...state,
				isGameBeingPlayed: true
			};

		default:
			return state;
	}
};

export default gameReducer;
