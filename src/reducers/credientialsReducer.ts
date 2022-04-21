/* eslint-disable default-param-last */

// custom types
import type { CredentialsActions } from '../types/actions';
import type { CredentialsState } from '../types/state';

const initialCredentialsState: CredentialsState = {
  authToken: ''
};

const credentialsReducer = (
  state: CredentialsState = initialCredentialsState,
  action: CredentialsActions
): CredentialsState => {
  switch (action.type) {
    case 'SET_AUTH_TOKEN': {
      return {
        authToken: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export default credentialsReducer;
