# Magic Card or Metal Band

This a simple, fun web game that I've created based off a fan favourite in the MTG community: Magic Card, or Metal Band?

A lot of cards in Magic: The Gathering sound like they could be metal bands, and vice versa. This is a simple game to pass the time!

## APIs

APIs being used:

- Scryfall: https://scryfall.com/docs/api
- Spotify: https://developer.spotify.com/documentation/web-api/

## Refactor's To-Do

- [ ] Re-evaluate hooks as util functions
- [ ] See if there is a way to exclude certain card types from the Scryfall API request (tokens, emblems, etc.)
- [ ] Include "Both" option when selecting

## API / Action Reminder:

- functions inside api/functions.ts should return axios call
- actions inside actions/[FILE].ts should be:
  - async
  - call the api function
  - dispatch data
