import React from 'react';

// redux
import { useSelector } from 'react-redux';
import { CombinedState } from 'redux';

// components
import Game from '../Game';
import Start from '../Start';

// types
import { AppState, GameState } from '../../types/types';

const App = () => {
	// useReducer with TypeScript: useSelector<TYPE_OF_STATE, TYPE_OF_RETURN_VALUE>
	const game = useSelector<CombinedState<AppState>, GameState>((state) => state.game);

	return <div className='app-wrapper'>{game.isGameBeingPlayed ? <Game /> : <Start />}</div>;
};

export default App;
