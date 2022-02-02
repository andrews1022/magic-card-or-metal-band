import React, { useEffect } from 'react';
import axios from 'axios';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { CombinedState } from 'redux';

// actions
import {
	setCorrectAnswer,
	setCurrentBandData,
	setCurrentCardData,
	setFailedToFetch,
	setIsLoading
} from '../../actions/game';

// constants
import { MAGIC_CARD, METAL_BAND } from '../../constants/constants';

// types
import { AppState, CurrentBand, CurrentCard, GameState, ScryfallResponse } from '../../types/types';
import { scryfallUrl } from '../../api/api';

const Game = () => {
	const game = useSelector<CombinedState<AppState>, GameState>((state) => state.game);

	const dispatch = useDispatch();

	useEffect(() => {
		const source = axios.CancelToken.source();

		// randomly decide between either magic-card or metal-band on component mount
		const chosenValue = Math.random() < 0.5 ? MAGIC_CARD : METAL_BAND;
		dispatch(setCorrectAnswer(chosenValue));

		if (chosenValue === 'magic-card') {
			// set is loading to true (temporarily)
			dispatch(setIsLoading());

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
			// set is loading to true (temporarily)
			// dispatch(setIsLoading());

			const getBand = () => {
				// archspire band id: 7F9ZL4TJNr8AoU0UUQX8ih

				// prepare the current band data as required
				const currentBand: CurrentBand = {
					bandName: 'Archspire',
					picture: 'https://i.scdn.co/image/ab6761670000ecd4af5b0e55e0384fbd21900944',
					whereBandIsFrom: 'Vancouver, BC'
				};

				// dispatch the action to set the current band data
				dispatch(setCurrentBandData(currentBand));
			};

			getBand();
		}

		// cleanup
		return () => {
			source.cancel();
		};
	}, []);

	const answerSelectionHandler = () => {
		// eslint-disable-next-line no-console
		console.log('clicked!');
	};

	return (
		<div className='outer-wrapper'>
			{game.failedToFetch ? (
				<p>Woops! Something went wrong there. Please refresh and try again</p>
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

							<div className='answer-wrapper'>
								<h2>
									{game.currentCardData.cardName || game.currentBandData.bandName} is a{' '}
									{game.correctAnswer.replace('-', ' ')}!
								</h2>

								{game.currentCardData.setName ? (
									<p>
										{game.currentCardData.cardName} is a card from {game.currentCardData.setName}
									</p>
								) : null}

								{game.currentBandData.whereBandIsFrom ? (
									<p>
										{game.currentBandData.bandName} is a band from{' '}
										{game.currentBandData.whereBandIsFrom}
									</p>
								) : null}

								<img
									src={game.currentCardData.imageUri || game.currentBandData.picture}
									alt={`${game.currentCardData.cardName || game.currentBandData.bandName}`}
								/>

								<button type='button'>Another One!</button>
							</div>
						</>
					)}
				</div>
			)}
		</div>
	);
};

export default Game;
