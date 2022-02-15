import React, { useEffect } from 'react';

// axios
import axios from 'axios';

// redux
import { useDispatch, useSelector } from 'react-redux';

// actions
import { setAuthToken } from '../../actions/credentials';
import { setLocalStorageData } from '../../actions/bands';

// components
import Footer from '../Footer';
import Game from '../Game';
import Start from '../Start';

// data
import bands from '../../data/bands';

// constants
import { LOCAL_STORAGE_KEY } from '../../constants/constants';

// types
import { type CombinedAppState, type GameState } from '../../types/types';

const App = () => {
	const game = useSelector<CombinedAppState, GameState>((state) => state.game);

	const dispatch = useDispatch();

	// set spotify auth token (needed for all future get requests)
	useEffect(() => {
		const source = axios.CancelToken.source();

		dispatch(setAuthToken());

		// cleanup
		return () => {
			source.cancel();
		};
	}, []);

	// load / set band data from local storage
	useEffect(() => {
		dispatch(setLocalStorageData(bands));

		// cleanup
		return () => {
			localStorage.removeItem(LOCAL_STORAGE_KEY);
		};
	}, []);

	return (
		<>
			{game.isGameBeingPlayed ? <Game /> : <Start />}

			<Footer />
		</>
	);
};

export default App;
