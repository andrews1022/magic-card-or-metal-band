import { GameActions, ValidAnswers } from '../types/types';

export const startGame = (): GameActions => ({ type: 'START_GAME' });

export const setCorrectAnswer = (val: ValidAnswers): GameActions => ({
	type: 'SET_CORRECT_ANSWER',
	payload: val
});
