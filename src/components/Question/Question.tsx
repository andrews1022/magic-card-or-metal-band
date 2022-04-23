import type { MouseEvent } from 'react';

// material ui icons
import CropPortraitIcon from '@material-ui/icons/CropPortrait';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setWasGuessedCorrectly } from '../../actions/game';

// custom hooks
import useName from '../../hooks/useName';

// styled components
import * as S from './Question.styles';
import { Button } from '../UI/Button';

// constants
import { MAGIC_CARD, METAL_BAND } from '../../constants/constants';

// custom types
import type { CombinedAppState, GameState } from '../../types/state';

const Question = () => {
  // grabbing various pieces of state from redux store
  const game = useSelector<CombinedAppState, GameState>((state) => state.game);

  // dispatch hook call
  const dispatch = useDispatch();

  // set some vars to make jsx cleaner
  const nameToUse = useName();

  const answerSelectionHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget.dataset;
    const { correctAnswer } = game;

    return value === correctAnswer
      ? dispatch(setWasGuessedCorrectly(true))
      : dispatch(setWasGuessedCorrectly(false));
  };

  return (
    <>
      <h1>
        Is <S.Name>{nameToUse}</S.Name> a Magic Card, or a Metal Band?
      </h1>

      <S.ButtonRow>
        <Button
          color='bunting'
          data-value={MAGIC_CARD}
          disabled={game.hasSelected}
          onClick={answerSelectionHandler}
          type='button'
        >
          <CropPortraitIcon fontSize='large' /> Magic Card
        </Button>

        <Button
          color='bunting'
          data-value={METAL_BAND}
          disabled={game.hasSelected}
          onClick={answerSelectionHandler}
          type='button'
        >
          <MusicNoteIcon fontSize='large' /> Metal Band
        </Button>
      </S.ButtonRow>
    </>
  );
};

export default Question;
