import { useSelector } from 'react-redux';
import { CombinedAppState, GameState } from '../types/types';

const useImage = (): string => {
	const game = useSelector<CombinedAppState, GameState>((state) => state.game);

	return game.currentCardData.imageUri || game.currentBandData.picture;
};

export default useImage;
