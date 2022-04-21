import type { CombinedState } from 'redux';

// custom types
import type { CurrentCard, CurrentBand } from './current';

export type BandsState = {
  bands: string[];
};

export type CredentialsState = {
  authToken: string;
};

export type GameState = {
  isGameBeingPlayed: boolean;
  currentCardData: CurrentCard;
  currentBandData: CurrentBand;
  correctAnswer: string;
  isLoading: boolean;
  failedToFetch: boolean;
  wasGuessedCorrectly: boolean;
  hasSelected: boolean;
};

export type AppState = {
  bands: BandsState;
  credentials: CredentialsState;
  game: GameState;
};

// this is used for useSelector hook calls
export type CombinedAppState = CombinedState<AppState>;
