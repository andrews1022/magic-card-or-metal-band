import type { Dispatch } from 'redux';

// api
import { getSpotifyAuthToken } from '../api/functions';

// custom types
import { CredentialsActions } from '../types/actions';

export const setAuthToken = () => async (dispatch: Dispatch<CredentialsActions>) => {
  try {
    const resp = await getSpotifyAuthToken();

    dispatch({ type: 'SET_AUTH_TOKEN', payload: resp.data.access_token });
  } catch (error) {
    console.log(error);
  }
};
