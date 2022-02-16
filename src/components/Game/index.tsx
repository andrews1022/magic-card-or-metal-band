import React, { useEffect } from 'react';
import axios from 'axios';

// redux
import { useDispatch, useSelector } from 'react-redux';

// components
import Answer from '../Answer';
import Error from '../Error';
import Loading from '../Loading';
import Question from '../Question';

// styled
import { Wrapper } from '../UI/Wrapper';

// actions
import {
	restartGame,
	setCorrectAnswer,
	setCurrentBandData,
	setCurrentCardData,
	setIsLoading
} from '../../actions/game';

// constants
import { MAGIC_CARD, METAL_BAND } from '../../constants/constants';

// types
import type { BandsState, CombinedAppState, CredentialsState, GameState } from '../../types/types';

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
			dispatch(setCurrentCardData());
		}

		if (chosenValue === 'metal-band') {
			dispatch(setCurrentBandData(bands, credentials));
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
