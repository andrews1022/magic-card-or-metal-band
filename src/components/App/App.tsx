import React from 'react';

// redux
import { useSelector } from 'react-redux';
import { GameState } from '../../types/types';

// components
import Game from '../Game';
import Start from '../Start';

const App = () => {
	// useReducer with TypeScript: useSelector<TYPE_OF_STATE, TYPE_OF_RETURN_VALUE>
	const isGameBeingPlayed = useSelector<GameState, GameState['isGameBeingPlayed']>(
		(state) => state.isGameBeingPlayed
	);

	return <div className='app-wrapper'>{isGameBeingPlayed ? <Game /> : <Start />}</div>;
};

export default App;
