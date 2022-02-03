import React from 'react';

// redux
import { useSelector } from 'react-redux';

// custom hooks
import useImage from '../../hooks/useImage';
import useName from '../../hooks/useName';

// types
import { CombinedAppState, GameState } from '../../types/types';

type AnswerProps = {
	gameRestartHandler: () => void;
};

const Answer = ({ gameRestartHandler }: AnswerProps) => {
	const game = useSelector<CombinedAppState, GameState>((state) => state.game);

	// set some vars to make jsx cleaner
	const imageToUse = useImage();
	const nameToUse = useName();

	return (
		<div className='answer-wrapper'>
			<p>Your answer was {game.wasGuessedCorrectly ? 'Correct!' : 'Incorrect!'}</p>

			<h1>
				{nameToUse} is a {game.correctAnswer.replace('-', ' ')}!
			</h1>

			<img src={imageToUse} alt={`${nameToUse}`} />

			<button onClick={gameRestartHandler} type='button'>
				{game.wasGuessedCorrectly ? 'Another One!' : 'Try Again?'}
			</button>
		</div>
	);
};

export default Answer;
