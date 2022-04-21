/* eslint-disable default-param-last */

// custom types
import type { BandsActions } from '../types/actions';
import type { BandsState } from '../types/state';

const initialBandsState: BandsState = {
  bands: []
};

const bandsReducer = (state: BandsState = initialBandsState, action: BandsActions): BandsState => {
  switch (action.type) {
    case 'SET_LOCAL_STORAGE_BAND_DATA': {
      return {
        ...state,
        bands: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export default bandsReducer;
