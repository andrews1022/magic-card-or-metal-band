import React, { useEffect } from 'react';
import axios from 'axios';

// redux
import { useDispatch, useSelector } from 'react-redux';

// api
import { scryfallUrl, spotifyApiUrl } from '../../api/api';

// components
import Answer from '../Answer';
import Error from '../Error';
import Loading from '../Loading';
import Question from '../Question';

// styled
import { Wrapper } from '../UI/Wrapper';

// custom hooks
import useRandomBand from '../../hooks/useRandomBand';

// actions
import {
	restartGame,
	setCorrectAnswer,
	setCurrentBandData,
	setCurrentCardData,
	setFailedToFetch,
	setIsLoading
} from '../../actions/game';

// constants
import { MAGIC_CARD, METAL_BAND } from '../../constants/constants';

// types
import {
	BandsState,
	CombinedAppState,
	CredentialsState,
	CurrentBand,
	CurrentCard,
	GameState,
	ScryfallResponse,
	SpotifySearchResponse
} from '../../types/types';

const Game = () => {
	// grabbing various pieces of state from redux store
	const bands = useSelector<CombinedAppState, BandsState>((state) => state.bands);
	const credentials = useSelector<CombinedAppState, CredentialsState>((state) => state.credentials);
	const game = useSelector<CombinedAppState, GameState>((state) => state.game);

	// dispatch hook call
	const dispatch = useDispatch();

	// init game fn (run on component mount and in gameRestartHandler function below)
	const initGame = () => {
		// randomly decide between either magic-card or metal-band
		const chosenValue = Math.random() < 0.5 ? MAGIC_CARD : METAL_BAND;
		dispatch(setCorrectAnswer(chosenValue));

		// set is loading to true (temporarily)
		dispatch(setIsLoading());

		if (chosenValue === 'magic-card') {
			// fetch a magic card from scryfall
			const getMagicCard = async () => {
				try {
					const { data }: ScryfallResponse = await axios.get(scryfallUrl);

					// prepare the currentcard data as required
					const currentCard: CurrentCard = {
						cardName: data.name,
						imageUri: data.image_uris.normal,
						setName: data.set_name
					};

					// dispatch the action to set the currentcard data
					dispatch(setCurrentCardData(currentCard));
				} catch (error) {
					console.log(error);

					dispatch(setFailedToFetch());
				}
			};

			// execute the above async func
			getMagicCard();
		}

		if (chosenValue === 'metal-band') {
			const getBand = async () => {
				const randomBand = useRandomBand(bands);

				try {
					const { data }: SpotifySearchResponse = await axios.get(
						`${spotifyApiUrl}?q=${randomBand}&type=artist`,
						{
							headers: { Authorization: `Bearer ${credentials.authToken}` }
						}
					);

					const matchingBand = data.artists.items[0];

					// prepare the currentband data as required
					const currentBand: CurrentBand = {
						bandName: matchingBand.name,
						picture: matchingBand.images[0].url
					};

					// dispatch the action to set the currentband data
					dispatch(setCurrentBandData(currentBand));
				} catch (error) {
					console.log(error);

					dispatch(setFailedToFetch());
				}
			};

			getBand();
		}
	};

	// decide either magic card or metal band, then make appropiate api get request
	useEffect(() => {
		const source = axios.CancelToken.source();

		initGame();

		// cleanup
		return () => {
			source.cancel();
		};
	}, []);

	const gameRestartHandler = () => {
		dispatch(restartGame());

		initGame();
	};

	// return either of these first if/when applicable
	if (game.failedToFetch) return <Error />;
	if (game.isLoading) return <Loading />;

	return (
		<Wrapper>
			<Question />

			<Answer gameRestartHandler={gameRestartHandler} />
		</Wrapper>
	);
};

export default Game;
