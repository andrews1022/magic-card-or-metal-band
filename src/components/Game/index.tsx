import React, { useEffect } from 'react';
import axios from 'axios';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { CombinedState } from 'redux';

// api
import { scryfallUrl, spotifyApiUrl } from '../../api/api';

// actions
import {
	restartGame,
	setAnswer,
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
	AppState,
	BandsState,
	CredentialsState,
	CurrentBand,
	CurrentCard,
	GameState,
	ScryfallResponse,
	SpotifySearchResponse
} from '../../types/types';

const Game = () => {
	const bands = useSelector<CombinedState<AppState>, BandsState>((state) => state.bands);

	const credentials = useSelector<CombinedState<AppState>, CredentialsState>(
		(state) => state.credentials
	);

	const game = useSelector<CombinedState<AppState>, GameState>((state) => state.game);

	const dispatch = useDispatch();

	const initGame = () => {
		// randomly decide between either magic-card or metal-band on component mount
		const chosenValue = Math.random() < 0.5 ? MAGIC_CARD : METAL_BAND;
		dispatch(setCorrectAnswer(chosenValue));

		// set is loading to true (temporarily)
		dispatch(setIsLoading());

		if (chosenValue === 'magic-card') {
			// fetch a magic card from scryfall
			const getMagicCard = async () => {
				try {
					const { data }: ScryfallResponse = await axios.get(scryfallUrl);

					// prepare the current card data as required
					const currentCard: CurrentCard = {
						cardName: data.name,
						imageUri: data.image_uris.normal,
						setName: data.set_name
					};

					// dispatch the action to set the current card data
					dispatch(setCurrentCardData(currentCard));
				} catch (error) {
					dispatch(setFailedToFetch());
				}
			};

			// execute the above async func
			getMagicCard();
		}

		if (chosenValue === 'metal-band') {
			const getBand = async () => {
				const randomBand = bands.bands[Math.floor(Math.random() * bands.bands.length)];
				const formattedRandomBand = randomBand.toLowerCase().replaceAll(' ', '%20');

				try {
					const { data }: SpotifySearchResponse = await axios.get(
						`${spotifyApiUrl}?q=${formattedRandomBand}&type=artist`,
						{
							headers: { Authorization: `Bearer ${credentials.authToken}` }
						}
					);

					const matchingBand = data.artists.items[0];

					// prepare the current band data as required
					const currentBand: CurrentBand = {
						bandName: matchingBand.name,
						picture: matchingBand.images[0].url
					};

					// dispatch the action to set the current band data
					dispatch(setCurrentBandData(currentBand));
				} catch (error) {
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

	const answerSelectionHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		const { value } = e.currentTarget.dataset;
		const { correctAnswer } = game;

		if (value === correctAnswer) {
			// the correct button was clicked
			dispatch(setAnswer(true));
		} else {
			// the incorrect button was clicked
			dispatch(setAnswer(false));
		}
	};

	const gameRestartHandler = () => {
		dispatch(restartGame());

		initGame();
	};

	return (
		<div className='outer-wrapper'>
			{game.failedToFetch ? (
				<p>Woops! Something went wrong there. Please refresh and try again.</p>
			) : (
				<div className='inner-wrapper'>
					{game.isLoading ? (
						<h1>Loading...</h1>
					) : (
						<>
							<h2>
								Is {game.currentCardData.cardName || game.currentBandData.bandName} a Magic Card, or
								a Metal Band?
							</h2>

							<div className='btn-row'>
								<button data-value={MAGIC_CARD} onClick={answerSelectionHandler} type='button'>
									Magic Card
								</button>
								<button data-value={METAL_BAND} onClick={answerSelectionHandler} type='button'>
									Metal Band
								</button>
							</div>

							{game.hasSelected ? (
								<div className='answer-wrapper'>
									<p>Your answer was {game.wasGuessedCorrectly ? 'Correct!' : 'Incorrect!'}</p>

									<h2>
										{game.currentCardData.cardName || game.currentBandData.bandName} is a{' '}
										{game.correctAnswer.replace('-', ' ')}!
									</h2>

									<img
										src={game.currentCardData.imageUri || game.currentBandData.picture}
										alt={`${game.currentCardData.cardName || game.currentBandData.bandName}`}
									/>

									<button onClick={gameRestartHandler} type='button'>
										{game.wasGuessedCorrectly ? 'Another One!' : 'Try Again?'}
									</button>
								</div>
							) : null}
						</>
					)}
				</div>
			)}
		</div>
	);
};

export default Game;
