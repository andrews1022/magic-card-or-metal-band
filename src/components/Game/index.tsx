import React, { useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { CombinedState } from 'redux';
import { setCorrectAnswer } from '../../actions/game';

// constants
import { MAGIC_CARD, METAL_BAND } from '../../constants/constants';

// types
import { AppState, GameState } from '../../types/types';

const Game = () => {
	const game = useSelector<CombinedState<AppState>, GameState>((state) => state.game);

	const dispatch = useDispatch();

	useEffect(() => {
		// randomly decide between either magic-card or metal-band on component mount
		const chosenValue = Math.random() < 0.5 ? MAGIC_CARD : METAL_BAND;
		dispatch(setCorrectAnswer(chosenValue));

		if (chosenValue === 'magic-card') {
			console.log('fetch a magic card from scryfall');
		}

		if (chosenValue === 'metal-band') {
			console.log('fetch a metal band from spotify');
		}

		console.log('setup game after fetching data');
	}, []);

	return (
		<div className='game-wrapper'>
			<h2>Hello from the Game component!</h2>
			<p>The correct answer for this question is: {game.correctAnswer}</p>
		</div>
	);
};

export default Game;
