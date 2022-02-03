import { BandsActions } from '../types/types';

export const setBandData = (arr: string[]): BandsActions => ({
	type: 'SET_BAND_DATA',
	payload: arr
});
