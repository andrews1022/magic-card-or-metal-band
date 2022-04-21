import { Buffer } from 'buffer';

// api endpoints
import { scryfallApiUrl, spotifyApiUrl, spotifyTokenUrl } from './endpoints';

// utils
import { getRandomBand } from '../utils/getRandomBand';

// custom types
import type { ScryfallResponse } from '../types/scryfall';
import type { SpotifyAuthResponse, SpotifySearchResponse } from '../types/spotify';
import type { BandsState, CredentialsState } from '../types/state';

// used in: src/actions/credentials.ts
export const getSpotifyAuthToken = async () => {
  // store env string for Authorization header below
  const envString = `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`;

  const resp = await fetch(spotifyTokenUrl, {
    body: 'grant_type=client_credentials',
    headers: {
      Authorization: `Basic ${Buffer.from(`${envString}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST'
  });

  const data: SpotifyAuthResponse = await resp.json();

  return data;
};

// used in: src/actions/game.ts
export const getBand = async (bands: BandsState, credentials: CredentialsState) => {
  // get random band for url
  const randomBand = getRandomBand(bands);

  // prepare url for fetch
  const url = `${spotifyApiUrl}?q=${randomBand}&type=artist`;

  const resp = await fetch(url, {
    headers: {
      Authorization: `Bearer ${credentials.authToken}`
    }
  });

  const data: SpotifySearchResponse = await resp.json();

  return data;
};

// used in: src/actions/game.ts
export const getMagicCard = async () => {
  const resp = await fetch(scryfallApiUrl);
  const data: ScryfallResponse = await resp.json();

  return data;
};
