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
		picture: ''
	},
	correctAnswer: '',
	isLoading: false,
	failedToFetch: false,
	wasGuessedCorrectly: false,
	hasSelected: false
};

const gameReducer = (state: GameState = intialGameState, action: GameActions): GameState => {
	switch (action.type) {
		case 'FAILED_TO_FETCH': {
			return {
				...state,
				failedToFetch: true
			};
		}

		case 'LOADING': {
			return {
				...state,
				isLoading: true
			};
		}

		case 'RESTART_GAME': {
			return {
				...intialGameState,
				isGameBeingPlayed: true
			};
		}

		case 'SET_WAS_GUESSED_CORRECTLY': {
			return {
				...state,
				wasGuessedCorrectly: action.payload,
				hasSelected: true
			};
		}

		case 'SET_CORRECT_ANSWER': {
			return {
				...state,
				correctAnswer: action.payload
			};
		}

		case 'SET_CURRENT_BAND_DATA': {
			return {
				...state,
				currentBandData: action.payload,
				isLoading: false
			};
		}

		case 'SET_CURRENT_CARD_DATA': {
			return {
				...state,
				currentCardData: action.payload,
				isLoading: false
			};
		}

		case 'START_GAME': {
			return {
				...state,
				isGameBeingPlayed: true
			};
		}

		default: {
			return state;
		}
	}
};

export default gameReducer;
