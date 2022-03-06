// types
import type { Dispatch } from 'redux';
import type { CredentialsActions } from '../types/types';

// api
import { getSpotifyAuthToken } from '../api/functions';

export const setAuthToken = () => async (dispatch: Dispatch<CredentialsActions>) => {
  try {
    const resp = await getSpotifyAuthToken();

    dispatch({ type: 'SET_AUTH_TOKEN', payload: resp.data.access_token });
  } catch (error) {
    console.log(error);
  }
};
