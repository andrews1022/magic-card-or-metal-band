import { useSelector } from 'react-redux';

// custom types
import { CombinedAppState, GameState } from '../types/state';

const useImage = (): string => {
  const game = useSelector<CombinedAppState, GameState>((state) => state.game);

  return game.currentCardData.imageUri || game.currentBandData.picture;
};

export default useImage;
