import axios from 'axios';
import { Buffer } from 'buffer';

// api endpoints
import { scryfallApiUrl, spotifyApiUrl, spotifyTokenUrl } from './urls';

// utils
import { getRandomBand } from '../utils/getRandomBand';

// custom types
import { type BandsState, type CredentialsState } from '../types/types';

// used in: src/actions/credentials.ts
export const getSpotifyAuthToken = () => {
	// store env string for Authorization header below
	const envString = `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`;

	// prepare data string for axios call
	const data = 'grant_type=client_credentials';

	// prepare config obj for axios call
	const config = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${Buffer.from(`${envString}`).toString('base64')}`
		}
	};

	return axios.post(spotifyTokenUrl, data, config);
};

// used in: src/actions/game.ts
export const getBand = (bands: BandsState, credentials: CredentialsState) => {
	// get random band for url
	const randomBand = getRandomBand(bands);

	// prepare url for axios call
	const url = `${spotifyApiUrl}?q=${randomBand}&type=artist`;

	// prepare config obj for axios call
	const config = {
		headers: {
			Authorization: `Bearer ${credentials.authToken}`
		}
	};

	return axios.get(url, config);
};

// used in: src/actions/game.ts
export const getMagicCard = () => axios.get(scryfallApiUrl);
