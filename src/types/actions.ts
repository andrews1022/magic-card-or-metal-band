// custom types
import type { CurrentBand, CurrentCard } from './current';
import type { ValidAnswers } from './global';

export type BandsActions = { type: 'SET_LOCAL_STORAGE_BAND_DATA'; payload: string[] };

export type CredentialsActions = { type: 'SET_AUTH_TOKEN'; payload: string };

export type GameActions =
  | { type: 'FAILED_TO_FETCH' }
  | { type: 'LOADING' }
  | { type: 'RESTART_GAME' }
  | { type: 'SET_CORRECT_ANSWER'; payload: ValidAnswers }
  | { type: 'SET_CURRENT_BAND_DATA'; payload: CurrentBand }
  | { type: 'SET_CURRENT_CARD_DATA'; payload: CurrentCard }
  | { type: 'SET_WAS_GUESSED_CORRECTLY'; payload: boolean }
  | { type: 'START_GAME' };
