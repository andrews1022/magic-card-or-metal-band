import { Dispatch } from 'redux';

export const setAuthToken = (token: string) => async (dispatch: Dispatch) => {
	dispatch({ type: 'SET_AUTH_TOKEN', payload: token });
};
