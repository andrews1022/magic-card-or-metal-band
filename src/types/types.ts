import { CombinedState } from 'redux';

// valid answers
type MagicCardType = 'magic-card';
type MetalBandType = 'metal-band';
export type ValidAnswers = MagicCardType | MetalBandType;

// current data
export type CurrentCard = {
	cardName: string;
	imageUri: string;
	setName: string;
};

export type CurrentBand = {
	bandName: string;
	picture: string;
};

// state
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

// actions
export type BandsActions = { type: 'SET_BAND_DATA'; payload: string[] };

export type CredentialsActions = { type: 'SET_AUTH_TOKEN'; payload: string };

export type GameActions =
	| { type: 'FAILED_TO_FETCH' }
	| { type: 'LOADING' }
	| { type: 'RESTART_GAME' }
	| { type: 'SET_ANSWER'; payload: boolean }
	| { type: 'SET_CORRECT_ANSWER'; payload: ValidAnswers }
	| { type: 'SET_CURRENT_BAND_DATA'; payload: CurrentBand }
	| { type: 'SET_CURRENT_CARD_DATA'; payload: CurrentCard }
	| { type: 'START_GAME' };

// api responses
export type ScryfallResponse = {
	data: {
		object: 'card';
		id: string;
		oracle_id: string;
		multiverse_ids: never[] | number[];
		mtgo_id?: number;
		mtgo_foil_id?: number;
		tcgplayer_id: number;
		cardmarket_id: number;
		name: string;
		lang: string;
		released_at: string;
		uri: string;
		scryfall_uri: string;
		layout: 'normal';
		highres_image: boolean;
		image_status: 'highres_scan';
		image_uris: {
			small: string;
			normal: string;
			large: string;
			png: string;
			art_crop: string;
			border_crop: string;
		};
		mana_cost: string;
		cmc: number;
		type_line: string;
		oracle_text: string;
		power?: string;
		toughness?: string;
		colors: string[];
		color_identity: string[];
		keywords: never[] | string[];
		card_faces?: {}[];
		legalities: {
			standard: 'legal' | 'not_legal';
			future: 'legal' | 'not_legal';
			historic: 'legal' | 'not_legal';
			gladiator: 'legal' | 'not_legal';
			pioneer: 'legal' | 'not_legal';
			modern: 'legal' | 'not_legal';
			legacy: 'legal' | 'not_legal';
			pauper: 'legal' | 'not_legal';
			vintage: 'legal' | 'not_legal';
			penny: 'legal' | 'not_legal';
			commander: 'legal' | 'not_legal';
			brawl: 'legal' | 'not_legal';
			historicbrawl: 'legal' | 'not_legal';
			alchemy: 'legal' | 'not_legal';
			paupercommander: 'legal' | 'not_legal';
			duel: 'legal' | 'not_legal';
			oldschool: 'legal' | 'not_legal';
			premodern: 'legal' | 'not_legal';
		};
		games: string[];
		reserved: boolean;
		foil: boolean;
		nonfoil: boolean;
		finishes: string[];
		oversized: boolean;
		promo: boolean;
		reprint: boolean;
		variation: boolean;
		set_id: string;
		set: string;
		set_name: string;
		set_type: string;
		set_uri: string;
		set_search_uri: string;
		scryfall_set_uri: string;
		rulings_uri: string;
		prints_search_uri: string;
		collector_number: string;
		digital: boolean;
		rarity: string;
		flavor_text?: string;
		card_back_id: string;
		artist: string;
		artist_ids: string[];
		illustration_id: string;
		border_color: string;
		frame: string;
		security_stam?: string;
		full_art: boolean;
		textless: boolean;
		booster: boolean;
		story_spotlight: boolean;
		edhrec_rank: number;
		prices: {
			usd: string | null;
			usd_foil: string | null;
			usd_etched: string | null;
			eur: string | null;
			eur_foil: string | null;
			tix: string | null;
		};
		related_uris: {
			tcgplayer_infinite_articles: string;
			tcgplayer_infinite_decks: string;
			edhrec: string;
			mtgtop8: string;
		};
		purchase_uris: {
			tcgplayer: string;
			cardmarket: string;
			cardhoarder: string;
		};
	};
};

type SpotifyBandImage = { url: string; height: number; width: number };

export type SpotifyBandResponse = {
	external_urls: {
		spotify: string;
	};
	followers: {
		href: string;
		total: number;
	};
	genres: string[];
	href: string;
	id: string;
	images: SpotifyBandImage[];
	name: string;
	popularity: number;
	type: string;
	uri: string;
};

export type SpotifySearchResponse = {
	data: {
		artists: {
			href: string;
			items: never[] | SpotifyBandResponse[];
			limit: number;
			next: string | null;
			offset: number;
			previous: string | null;
			total: number;
		};
	};
};

// theme
export type ThemeColor = {
	color: 'bunting' | 'rouge' | 'jungleGreen' | 'halfPearlLusta';
};
