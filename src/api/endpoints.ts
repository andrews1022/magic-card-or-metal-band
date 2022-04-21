// scryfall api endpoint
const baseScryfallApiUrl = 'https://api.scryfall.com/cards/random';

const types = ['basic', 'conspiracy', 'emblem', 'legendary', 'planeswalker', 'token'];
const formattedTypes = types.map((type) => `-type%3A${type}+`);

const queryString = `${formattedTypes.join()}-is%3Afunny`.replaceAll(',', '');

export const scryfallApiUrl = `${baseScryfallApiUrl}?q=${queryString}`;

// spotify api endpoints
export const spotifyTokenUrl = 'https://accounts.spotify.com/api/token';
export const spotifyApiUrl = 'https://api.spotify.com/v1/search';
