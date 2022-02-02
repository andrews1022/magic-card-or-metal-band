/* eslint-disable default-param-last */

import { GameActions, GameState } from '../types/types';

const intialGameState: GameState = {
	isGameBeingPlayed: false,
	currentCardData: {
		cardName: '',
		imageUri: '',
		setName: ''
	},
	currentBandData: {
		bandName: '',
		picture: '',
		whereBandIsFrom: ''
	},
	correctAnswer: false,
	wasGuessedCorrectly: false,
	hasSelected: false
};

const gameReducer = (state: GameState = intialGameState, action: GameActions): GameState => {
	switch (action.type) {
		case 'START_GAME':
			return {
				...state,
				isGameBeingPlayed: true
			};

		default:
			return state;
	}
};

export default gameReducer;
