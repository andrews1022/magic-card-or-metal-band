/* eslint-disable default-param-last */

import { CredentialsActions, CredentialsState } from '../types/types';

const initialCredentialsState: CredentialsState = {
	authToken: ''
};

const credentialsReducer = (
	state: CredentialsState = initialCredentialsState,
	action: CredentialsActions
): CredentialsState => {
	switch (action.type) {
		case 'SET_AUTH_TOKEN':
			return {
				authToken: action.payload
			};

		default:
			return state;
	}
};

export default credentialsReducer;
