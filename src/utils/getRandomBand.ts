// constants
import { SPACE_REPLACEMENT } from '../constants/constants';

// custom types
import type { BandsState } from '../types/state';

export const getRandomBand = (arr: BandsState): string => {
  const randomBand = arr.bands[Math.floor(Math.random() * arr.bands.length)];
  const formattedRandomBand = randomBand.toLowerCase().replaceAll(' ', SPACE_REPLACEMENT);

  return formattedRandomBand;
};
