import React from 'react';

// material icons
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

// redux
import { useDispatch } from 'react-redux';
import { startGame } from '../../actions/game';

// styled components
import { Button } from '../UI/Button';
import { Wrapper } from '../UI/Wrapper';

const Start = () => {
  const dispatch = useDispatch();

  const startGameHandler = () => {
    dispatch(startGame());
  };

  return (
    <Wrapper>
      <h1>Magic Card or Metal Band</h1>

      <p>
        Welcome to Magic Card or Metal Band! This a simple game where you must decide if the
        generated name is either a card from Magic: The Gathering, or a Metal Band.
      </p>

      <Button color='bunting' onClick={startGameHandler} type='button'>
        <PlayArrowIcon fontSize='large' /> Play
      </Button>
    </Wrapper>
  );
};

export default Start;
