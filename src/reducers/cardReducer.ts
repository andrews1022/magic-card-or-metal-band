/* eslint-disable default-param-last */

import { CardActions, CardState } from '../types/types';

const initialCardState: CardState = {
	cardName: '',
	imageUri: '',
	setName: ''
};

const cardReducer = (state: CardState = initialCardState, action: CardActions): CardState => {
	switch (action.type) {
		case 'SET_CARD_DATA':
			return state;

		default:
			return state;
	}
};

export default cardReducer;
