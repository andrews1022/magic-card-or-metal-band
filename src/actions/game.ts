/* eslint-disable operator-linebreak */

// custom types
import { type Dispatch } from 'redux';
import type { ValidAnswers } from '../types/global';
import type { SpotifySearchResponse } from '../types/spotify';
import type { GameActions } from '../types/actions';
import type { CurrentBand, CurrentCard } from '../types/current';
import type { BandsState, CredentialsState } from '../types/state';

// api functions
import { getBand, getMagicCard } from '../api/functions';

// async actions
export const setCurrentBandData =
  (bands: BandsState, credentials: CredentialsState) => async (dispatch: Dispatch<GameActions>) => {
    try {
      const { data }: SpotifySearchResponse = await getBand(bands, credentials);

      const matchingBand = data.artists.items[0];

      // prepare the currentband data as required
      const currentBand: CurrentBand = {
        bandName: matchingBand.name,
        picture: matchingBand.images[0].url
      };

      dispatch({ type: 'SET_CURRENT_BAND_DATA', payload: currentBand });
    } catch (error) {
      dispatch({ type: 'FAILED_TO_FETCH' });
    }
  };

export const setCurrentCardData = () => async (dispatch: Dispatch<GameActions>) => {
  try {
    const data = await getMagicCard();

    // prepare the currentcard data as required
    const currentCard: CurrentCard = {
      cardName: data.name,
      imageUri: data.image_uris.normal,
      setName: data.set_name
    };

    dispatch({ type: 'SET_CURRENT_CARD_DATA', payload: currentCard });
  } catch (error) {
    dispatch({ type: 'FAILED_TO_FETCH' });
  }
};

// regular actions, no parameters
export const restartGame = () => (dispatch: Dispatch<GameActions>) => {
  dispatch({ type: 'RESTART_GAME' });
};

export const setFailedToFetch = () => (dispatch: Dispatch<GameActions>) => {
  dispatch({ type: 'FAILED_TO_FETCH' });
};

export const setIsLoading = () => (dispatch: Dispatch<GameActions>) => {
  dispatch({ type: 'LOADING' });
};

export const startGame = () => (dispatch: Dispatch<GameActions>) => {
  dispatch({ type: 'START_GAME' });
};

// regular actions, with parameters
export const setCorrectAnswer = (val: ValidAnswers) => (dispatch: Dispatch<GameActions>) => {
  dispatch({ type: 'SET_CORRECT_ANSWER', payload: val });
};

export const setWasGuessedCorrectly = (bool: boolean) => (dispatch: Dispatch<GameActions>) => {
  dispatch({ type: 'SET_WAS_GUESSED_CORRECTLY', payload: bool });
};
