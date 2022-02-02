import React from 'react';

// material icons
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

// redux
import { useDispatch } from 'react-redux';
import { startGame } from '../../actions/game';

const Start = () => {
	const dispatch = useDispatch();

	const startGameHandler = () => {
		dispatch(startGame());
	};

	return (
		<div className='wrapper'>
			<h1>Magic Card or Metal Band</h1>

			<p>
				Welcome to Magic Card or Metal Band! This a simple game where you must decide if the
				generated name is either a card from Magic: The Gathering, or a Metal Band.
			</p>

			<button onClick={startGameHandler} type='button'>
				<PlayArrowIcon />
				Play
			</button>
		</div>
	);
};

export default Start;
