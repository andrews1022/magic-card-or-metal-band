/* eslint-disable no-console */

import React, { useEffect } from 'react';

// axios
import axios from 'axios';
import { Buffer } from 'buffer';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { CombinedState } from 'redux';

// components
import Game from '../Game';
import Start from '../Start';

// api
import { spotifyTokenUrl } from '../../api/api';

// types
import { AppState, GameState } from '../../types/types';

// actions
import { setAuthToken } from '../../actions/credentials';

const App = () => {
	const game = useSelector<CombinedState<AppState>, GameState>((state) => state.game);

	const dispatch = useDispatch();

	// set spotify auth token
	useEffect(() => {
		const source = axios.CancelToken.source();

		const authorizationHeader = `Basic ${Buffer.from(
			`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`
		).toString('base64')}`;

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

	return <div className='app-wrapper'>{game.isGameBeingPlayed ? <Game /> : <Start />}</div>;
};

export default App;
