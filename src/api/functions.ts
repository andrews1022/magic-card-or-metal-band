// axios
import axios from 'axios';

// redux types
import { Dispatch } from 'redux';

// api endpoints
import { scryfallUrl, spotifyApiUrl, spotifyTokenUrl } from './urls';

// actions
import { setAuthToken } from '../actions/credentials';
import { setCurrentBandData, setCurrentCardData, setFailedToFetch } from '../actions/game';

// custom hooks
import useAuth from '../hooks/useAuth';
import useRandomBand from '../hooks/useRandomBand';

// custom types
import {
	BandsState,
	CredentialsState,
	CurrentBand,
	CurrentCard,
	ScryfallResponse,
	SpotifySearchResponse
} from '../types/types';

export const getSpotifyAuthToken = async (dispatch: Dispatch<any>) => {
	try {
		const axiosData = 'grant_type=client_credentials';

		const axiosConfig = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: useAuth()
			}
		};

		const resp = await axios.post(spotifyTokenUrl, axiosData, axiosConfig);

		dispatch(setAuthToken(resp.data.access_token));
	} catch (error) {
		console.log(error);
	}
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
	const randomBand = useRandomBand(bands);

	try {
		const axiosUrl = `${spotifyApiUrl}?q=${randomBand}&type=artist`;

		const axiosConfig = {
			headers: { Authorization: `Bearer ${credentials.authToken}` }
		};

		const { data }: SpotifySearchResponse = await axios.get(axiosUrl, axiosConfig);

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
