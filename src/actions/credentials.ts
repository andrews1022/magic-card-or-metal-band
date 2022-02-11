// redux types
import { Dispatch } from 'redux';

// api fns
import { getSpotifyAuthToken } from '../api/functions';

export const setAuthToken = () => async (dispatch: Dispatch<any>) => {
	try {
		const resp = await getSpotifyAuthToken();

		dispatch({ type: 'SET_AUTH_TOKEN', payload: resp.data.access_token });
	} catch (error) {
		console.log(error);
	}
};
