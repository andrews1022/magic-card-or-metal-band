# Magic Card or Metal Band

This a simple, fun web game that I've created based off a fan favourite in the MTG community: Magic Card, or Metal Band?

A lot of cards in Magic: The Gathering sound like they could be metal bands, and vice versa. This is a simple game to pass the time!

## APIs

APIs being used:

- Scryfall: https://scryfall.com/docs/api
- Spotify: https://developer.spotify.com/documentation/web-api/

## State

Game state:

- `isGameBeingPlayed`: either `true` or `false`
  - is used to show either Start or Game component
- `currentCardData`:
  - cardName
  - imageUri
  - setName
- `currentBandData`
  - bandName
  - picture
  - whereBandIsFrom
- `correctAnswer`: either `magic-card` or `metal-band`
- `wasGuessedCorrectly`: either `true` or `false`
  - simply used for whether or not the user clicked the correct button
- `hasSelected`: either `true` or `false`
  - used for display the `<Answer />` component (faded in) underneath question regardless if user was right or wrong

## Game

Decide randomly between picking an Magic Card or Metal Band: `magic-card` or `metal-band`

If Magic Card:

- Set `correctAnswer` state to `magic-card`
- Make API request to `https://api.scryfall.com/cards/random`
- Save the following fields from the API response to `currentCardData`:
  - `name`
  - `image_uris.normal`
  - `set_name`
- Display the following:
  - Heading: Is [CARD_NAME] a Magic Card, or a Metal Band?
  - 2 Buttons (each button has a `data-value` prop with a value of either `magic-card` or `metal-band`)

If Metal Band:

- Set `correctAnswer` state to `metal-band`
- Make API request to Spotify endpoint (need to add randomness to query)
- Save the following fields from the API response to `currentBandData`:
  - TBD
- Display the following:
  - Heading: Is [BAND_NAME] a Magic Card, or a Metal Band?
  - 2 Buttons (each button has a `data-value` prop with a value of either `magic-card` or `metal-band`)

When user clicks a button:

- Check if the `data-value prop value is the same as value of `correctAnswer` in state
  - If so, set `wasGuessedCorrectly` to `true`
  - If not, set `wasGuessedCorrectly` to `false`
- Animate in Answer
  - Say either "Correct!" or "Incorrect!", then a short paragraph
    - Magic Card: [CARD_NAME] is a Magic card from the set [SET_NAME]
    - Metal Band: [BAND_NAME] is a metal band from [WHERE_BAND_IS_FROM]
- Display a button to "Try Again?" if guess incorrectly, or "Another One!" if guessed correctly
  - When user clicks this button, reset game (perform the follwing)
    - Randomly decide which API request to make
    - Set currentObj data
    - Set correctAnswer
    - Display Question
