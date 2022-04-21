import { useSelector } from 'react-redux';

// custom types
import { CombinedAppState, GameState } from '../types/state';

const useName = (): string => {
  const game = useSelector<CombinedAppState, GameState>((state) => state.game);

  return game.currentCardData.cardName || game.currentBandData.bandName;
};

export default useName;
