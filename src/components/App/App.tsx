import React, { useEffect } from 'react';

// axios
import axios from 'axios';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { CombinedState } from 'redux';

// components
import Game from '../Game';
import Start from '../Start';

// api
import { getSpotifyAuthToken } from '../../api/functions';

// data
import bands from '../../data/bands';

// constants
import { LOCAL_STORAGE_KEY } from '../../constants/constants';

// types
import { AppState, GameState } from '../../types/types';
import { checkLocalStorage } from '../../local-storage/functions';

const App = () => {
	const game = useSelector<CombinedState<AppState>, GameState>((state) => state.game);

	const dispatch = useDispatch();

	// set spotify auth token (needed for all future get requests)
	useEffect(() => {
		const source = axios.CancelToken.source();

		getSpotifyAuthToken(dispatch);

		// cleanup
		return () => {
			source.cancel();
		};
	}, []);

	// load / set band data from local storage
	useEffect(() => {
		checkLocalStorage(bands, dispatch);

		// cleanup
		return () => {
			localStorage.removeItem(LOCAL_STORAGE_KEY);
		};
	}, []);

	// jsx
	return game.isGameBeingPlayed ? <Game /> : <Start />;
};

export default App;
