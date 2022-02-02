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
	correctAnswer: boolean;
	wasGuessedCorrectly: boolean;
	hasSelected: boolean;
};

export type AppState = {
	game: GameState;
};

export type GameActions =
	| { type: 'START_GAME' }
	| { type: 'SET_CARD_DATA' }
	| { type: 'SET_BAND_DATA' };
