// redux types
import { type Dispatch } from 'redux';

// api
import { getSpotifyAuthToken } from '../api/functions';

// custom types
import { type CredentialsActions } from '../types/types';

export const setAuthToken = () => async (dispatch: Dispatch<CredentialsActions>) => {
	try {
		const resp = await getSpotifyAuthToken();

		dispatch({ type: 'SET_AUTH_TOKEN', payload: resp.data.access_token });
	} catch (error) {
		console.log(error);
	}
};
