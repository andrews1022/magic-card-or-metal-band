// axios
import axios from 'axios';

// buffer
import { Buffer } from 'buffer';

// redux types
import { Dispatch } from 'redux';

// api endpoints
import { scryfallUrl, spotifyApiUrl, spotifyTokenUrl } from './urls';

// actions
import { setCurrentBandData, setCurrentCardData, setFailedToFetch } from '../actions/game';

// utils
import { getRandomBand } from '../utils/getRandomBand';

// custom types
import {
	BandsState,
	CredentialsState,
	CurrentBand,
	CurrentCard,
	ScryfallResponse,
	SpotifySearchResponse
} from '../types/types';

export const getSpotifyAuthToken = () => {
	const envString = `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`;

	const data = 'grant_type=client_credentials';

	const config = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${Buffer.from(`${envString}`).toString('base64')}`
		}
	};

	return axios.post(spotifyTokenUrl, data, config);
};

export const getMagicCard = async (dispatch: Dispatch<any>) => {
	try {
		const { data }: ScryfallResponse = await axios.get(scryfallUrl);

		// prepare the currentcard data as required
		const currentCard: CurrentCard = {
			cardName: data.name,
			imageUri: data.image_uris.normal,
			setName: data.set_name
		};

		// dispatch the action to set the currentcard data
		dispatch(setCurrentCardData(currentCard));
	} catch (error) {
		console.log(error);

		dispatch(setFailedToFetch());
	}
};

export const getBand = async (
	bands: BandsState,
	credentials: CredentialsState,
	dispatch: Dispatch<any>
) => {
	const randomBand = getRandomBand(bands);

	try {
		const url = `${spotifyApiUrl}?q=${randomBand}&type=artist`;

		const config = {
			headers: { Authorization: `Bearer ${credentials.authToken}` }
		};

		const { data }: SpotifySearchResponse = await axios.get(url, config);

		const matchingBand = data.artists.items[0];

		// prepare the currentband data as required
		const currentBand: CurrentBand = {
			bandName: matchingBand.name,
			picture: matchingBand.images[0].url
		};

		// dispatch the action to set the currentband data
		dispatch(setCurrentBandData(currentBand));
	} catch (error) {
		console.log(error);

		dispatch(setFailedToFetch());
	}
};
