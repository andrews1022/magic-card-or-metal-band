import { useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';

// actions
import { setAuthToken } from '../../actions/credentials';
import { setLocalStorageData } from '../../actions/bands';

// components
import Footer from '../Footer/Footer';
import Game from '../Game/Game';
import Start from '../Start/Start';

// data
import bands from '../../data/bands';

// constants
import { LOCAL_STORAGE_KEY } from '../../constants/constants';

// custom types
import type { CombinedAppState, GameState } from '../../types/state';

const App = () => {
  const game = useSelector<CombinedAppState, GameState>((state) => state.game);

  const dispatch = useDispatch();

  // set spotify auth token (needed for all future get requests)
  useEffect(() => {
    const controller = new AbortController();

    dispatch(setAuthToken());

    // cleanup
    return () => {
      controller.abort();
    };
  }, []);

  // load / set band data from local storage
  useEffect(() => {
    dispatch(setLocalStorageData(bands));

    // cleanup
    return () => {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    };
  }, []);

  return (
    <>
      {game.isGameBeingPlayed ? <Game /> : <Start />}

      <Footer />
    </>
  );
};

export default App;
