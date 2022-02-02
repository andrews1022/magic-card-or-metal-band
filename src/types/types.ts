// global
// type CurrentCard = {
// 	cardName: string;
// 	imageUri: string;
// 	setName: string;
// };

// type CurrentBand = {
// 	bandName: string;
// 	picture: string;
// 	whereBandIsFrom: string;
// };

// valid answers
export type MagicCardType = 'magic-card';
export type MetalBandType = 'metal-band';
export type ValidAnswers = MagicCardType | MetalBandType;

// state
export type GameState = {
	isGameBeingPlayed: boolean;
	currentCardData: {
		cardName: string;
		imageUri: string;
		setName: string;
	};
	currentBandData: {
		bandName: string;
		picture: string;
		whereBandIsFrom: string;
	};
	correctAnswer: string;
	wasGuessedCorrectly: boolean;
	hasSelected: boolean;
};

export type AppState = {
	game: GameState;
};

// actions
export type GameActions =
	| { type: 'START_GAME' }
	| { type: 'SET_CORRECT_ANSWER'; payload: ValidAnswers };
