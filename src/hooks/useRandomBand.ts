// constants
import { SPACE_REPLACEMENT } from '../constants/constants';

// types
import { BandsState } from '../types/types';

const useRandomBand = (arr: BandsState): string => {
	const randomBand = arr.bands[Math.floor(Math.random() * arr.bands.length)];
	const formattedRandomBand = randomBand.toLowerCase().replaceAll(' ', SPACE_REPLACEMENT);

	return formattedRandomBand;
};

export default useRandomBand;
