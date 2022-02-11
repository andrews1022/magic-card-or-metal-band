import React, { useEffect } from 'react';

// axios
import axios from 'axios';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setAuthToken } from '../../actions/credentials';

// components
import Footer from '../Footer';
import Game from '../Game';
import Start from '../Start';

// data
import bands from '../../data/bands';

// constants
import { LOCAL_STORAGE_KEY } from '../../constants/constants';

// types
import { CombinedAppState, GameState } from '../../types/types';

// local storage
import { checkLocalStorage } from '../../local-storage/functions';

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
		checkLocalStorage(bands, dispatch);

		// cleanup
		return () => {
			localStorage.removeItem(LOCAL_STORAGE_KEY);
		};
	}, []);

	// jsx
	return (
		<>
			{game.isGameBeingPlayed ? <Game /> : <Start />}

			<Footer />
		</>
	);
};

export default App;
