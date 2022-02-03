import { Dispatch } from 'redux';
import { CurrentBand, CurrentCard, GameActions, ValidAnswers } from '../types/types';

export const startGame = (): GameActions => ({ type: 'START_GAME' });

export const setCorrectAnswer = (val: ValidAnswers): GameActions => ({
	type: 'SET_CORRECT_ANSWER',
	payload: val
});

export const setIsLoading = (): GameActions => ({ type: 'LOADING' });

export const setCurrentCardData = (obj: CurrentCard) => async (dispatch: Dispatch) => {
	dispatch({ type: 'SET_CURRENT_CARD_DATA', payload: obj });
};

export const setCurrentBandData = (obj: CurrentBand) => async (dispatch: Dispatch) => {
	dispatch({ type: 'SET_CURRENT_BAND_DATA', payload: obj });
};

export const setFailedToFetch = (): GameActions => ({ type: 'FAILED_TO_FETCH' });

export const setAnswer = (bool: boolean): GameActions => ({ type: 'SET_ANSWER', payload: bool });
