import { BandsState } from '../types/types';

const useRandomBand = (arr: BandsState): string => {
	const randomBand = arr.bands[Math.floor(Math.random() * arr.bands.length)];
	const formattedRandomBand = randomBand.toLowerCase().replaceAll(' ', '%20');

	return formattedRandomBand;
};

export default useRandomBand;
