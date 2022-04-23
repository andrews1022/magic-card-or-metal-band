import { useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';

// components
import Answer from '../Answer/Answer';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import Question from '../Question/Question';

// styled components
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

// custom types
import type { CombinedAppState, BandsState, CredentialsState, GameState } from '../../types/state';

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
    const controller = new AbortController();

    initGame();

    // cleanup
    return () => {
      controller.abort();
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
