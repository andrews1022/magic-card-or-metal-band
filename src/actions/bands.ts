// types
import type { Dispatch } from 'redux';
import type { BandsActions } from '../types/types';

// constants
import { LOCAL_STORAGE_KEY } from '../constants/constants';

export const setLocalStorageData = (arr: string[]) => (dispatch: Dispatch<BandsActions>) => {
	const bandsFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);

	if (bandsFromLocalStorage) {
		// save bands retrieved from localstorage to redux store
		dispatch({ type: 'SET_LOCAL_STORAGE_BAND_DATA', payload: JSON.parse(bandsFromLocalStorage) });
	} else {
		// save bands to localstorage
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arr));

		// save bands to redux store
		dispatch({ type: 'SET_LOCAL_STORAGE_BAND_DATA', payload: arr });
	}
};
