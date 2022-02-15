import { useSelector } from 'react-redux';
import { type CombinedAppState, type GameState } from '../types/types';

const useName = (): string => {
	const game = useSelector<CombinedAppState, GameState>((state) => state.game);

	return game.currentCardData.cardName || game.currentBandData.bandName;
};

export default useName;
