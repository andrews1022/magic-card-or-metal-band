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

// state
export type GameState = {
	correctAnswer: boolean;
	hasSelected: boolean;
	isGameBeingPlayed: boolean;
	wasGuessedCorrectly: boolean;
};

export type CardState = {
	cardName: string;
	imageUri: string;
	setName: string;
};

export type BandState = {
	bandName: string;
	picture: string;
	whereBandIsFrom: string;
};

// actions
export type GameActions = { type: 'INIT' };
export type CardActions = { type: 'SET_CARD_DATA' };
export type BandActions = { type: 'SET_BAND_DATA' };
