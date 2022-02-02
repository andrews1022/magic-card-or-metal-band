/* eslint-disable no-buffer-constructor */

import React, { useEffect } from 'react';
import axios from 'axios';
// import dotenv from 'dotenv';
import { Buffer } from 'buffer';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { CombinedState } from 'redux';

// components
import Game from '../Game';
import Start from '../Start';

// types
import { AppState, GameState } from '../../types/types';
// import { setFailedToFetch } from '../../actions/game';
import { setAuthToken } from '../../actions/credentials';
import { spotifyTokenUrl } from '../../api/api';

const App = () => {
	// useReducer with TypeScript: useSelector<TYPE_OF_STATE, TYPE_OF_RETURN_VALUE>
	const game = useSelector<CombinedState<AppState>, GameState>((state) => state.game);
	// const credentials = useSelector<CombinedState<AppState>, CredentialsState>(
	// 	(state) => state.credentials
	// );

	const dispatch = useDispatch();

	// const spotifyCredentials = {
	// 	clientId: process.env.SPOTIFY_CLIENT_ID,
	// 	clientSecret: process.env.SPOTIFY_CLIENT_SECRET
	// };

	// useEffect(() => {
	// 	dotenv.config();
	// }, []);

	// set spotify auth token
	useEffect(() => {
		const source = axios.CancelToken.source();

		// hardcoded (working)
		// const spotifyClientId = '';
		// const spotifyClientSecret = '';

		const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
		const spotifyClientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

		const setSpotifyAuthToken = async () => {
			axios(spotifyTokenUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Authorization: `Basic ${Buffer.from(`${spotifyClientId}:${spotifyClientSecret}`).toString(
						'base64'
					)}`
				},
				data: 'grant_type=client_credentials'
			})
				.then((resp) => {
					console.log(resp);

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

	return <div className='app-wrapper'>{game.isGameBeingPlayed ? <Game /> : <Start />}</div>;
};

export default App;
