// redux types
import { Dispatch } from 'redux';

// custom types
import { CurrentBand, CurrentCard, GameActions, ValidAnswers } from '../types/types';

export const restartGame = (): GameActions => ({ type: 'RESTART_GAME' });

export const setAnswer = (bool: boolean): GameActions => ({ type: 'SET_ANSWER', payload: bool });

export const setCorrectAnswer = (val: ValidAnswers): GameActions => ({
	type: 'SET_CORRECT_ANSWER',
	payload: val
});

export const setCurrentBandData = (obj: CurrentBand) => async (dispatch: Dispatch<any>) => {
	dispatch({ type: 'SET_CURRENT_BAND_DATA', payload: obj });
};

export const setCurrentCardData = (obj: CurrentCard) => async (dispatch: Dispatch<any>) => {
	dispatch({ type: 'SET_CURRENT_CARD_DATA', payload: obj });
};

export const setFailedToFetch = (): GameActions => ({ type: 'FAILED_TO_FETCH' });

export const setIsLoading = (): GameActions => ({ type: 'LOADING' });

export const startGame = (): GameActions => ({ type: 'START_GAME' });
