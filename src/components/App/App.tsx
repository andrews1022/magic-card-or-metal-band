/* eslint-disable no-console */

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
import { spotifyTokenUrl } from '../../api/api';

// actions
import { setBandData } from '../../actions/bands';
import { setAuthToken } from '../../actions/credentials';

// custom hooks
import useAuth from '../../hooks/useAuth';

// data
import bands from '../../data/bands';

// constants
import { LOCAL_STORAGE_KEY } from '../../constants/constants';

// types
import { AppState, GameState } from '../../types/types';

const App = () => {
	const game = useSelector<CombinedState<AppState>, GameState>((state) => state.game);

	const dispatch = useDispatch();

	// set spotify auth token
	useEffect(() => {
		const source = axios.CancelToken.source();

		const authorizationHeader = useAuth();

		const setSpotifyAuthToken = async () => {
			axios(spotifyTokenUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Authorization: authorizationHeader
				},
				data: 'grant_type=client_credentials'
			})
				.then((resp) => {
					dispatch(setAuthToken(resp.data.access_token));
				})
				.catch((error) => {
					console.log(error);
				});
		};

		setSpotifyAuthToken();

		// cleanup
		return () => {
			source.cancel();
		};
	}, []);

	// load / set band data from local storage
	useEffect(() => {
		const checkLocalStorage = () => {
			const bandsFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);

			// console.log(bandsFromLocalStorage);
			if (!bandsFromLocalStorage) {
				// save bands to local storage
				localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bands));

				// save bands to redux store'
				dispatch(setBandData(bands));
			} else {
				// save bands to redux store'
				dispatch(setBandData(JSON.parse(bandsFromLocalStorage)));
			}
		};

		checkLocalStorage();

		// cleanup
		return () => {
			localStorage.removeItem(LOCAL_STORAGE_KEY);
		};
	}, []);

	return <div className='app-wrapper'>{game.isGameBeingPlayed ? <Game /> : <Start />}</div>;
};

export default App;
