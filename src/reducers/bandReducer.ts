/* eslint-disable default-param-last */

import { BandActions, BandState } from '../types/types';

const initialBandState: BandState = {
	bandName: '',
	picture: '',
	whereBandIsFrom: ''
};

const bandReducer = (state: BandState = initialBandState, action: BandActions): BandState => {
	switch (action.type) {
		case 'SET_BAND_DATA':
			return state;

		default:
			return state;
	}
};

export default bandReducer;
