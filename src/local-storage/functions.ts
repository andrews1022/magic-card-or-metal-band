// redux types
import { Dispatch } from 'redux';

// actions
import { setBandData } from '../actions/bands';

// constants
import { LOCAL_STORAGE_KEY } from '../constants/constants';

// custom types
import { BandsActions } from '../types/types';

export const checkLocalStorage = (bands: string[], dispatch: Dispatch<BandsActions>) => {
	const bandsFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);

	if (!bandsFromLocalStorage) {
		// save bands to localstorage
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bands));

		// save bands to redux store
		dispatch(setBandData(bands));
	} else {
		// save bands retrieved from localstorage to redux store
		dispatch(setBandData(JSON.parse(bandsFromLocalStorage)));
	}
};
