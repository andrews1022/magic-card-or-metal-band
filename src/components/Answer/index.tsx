import React from 'react';

// material icons
import RefreshIcon from '@material-ui/icons/Refresh';

// redux
import { useSelector } from 'react-redux';

// styled components
import * as S from './styles';
import { Button } from '../UI/Button';

// custom hooks
import useImage from '../../hooks/useImage';
import useName from '../../hooks/useName';

// types
import { CombinedAppState, GameState } from '../../types/types';

// props
type AnswerProps = {
	gameRestartHandler: () => void;
};

const Answer = ({ gameRestartHandler }: AnswerProps) => {
	const game = useSelector<CombinedAppState, GameState>((state) => state.game);

	const answerColor = game.wasGuessedCorrectly ? 'jungleGreen' : 'rouge';

	// set some vars to make jsx cleaner
	const imageToUse = useImage();
	const nameToUse = useName();

	return (
		<S.Wrapper isInView={game.hasSelected}>
			<p>
				Your answer was{' '}
				<S.Correct color={answerColor}>
					{game.wasGuessedCorrectly ? 'Correct!' : 'Incorrect!'}
				</S.Correct>
			</p>

			<p>
				<S.Name>{nameToUse}</S.Name> is a <S.Type>{game.correctAnswer.replace('-', ' ')}</S.Type>!
			</p>

			<S.Image src={imageToUse} alt={nameToUse} />

			<Button color={answerColor} onClick={gameRestartHandler} type='button'>
				<RefreshIcon fontSize='large' /> {game.wasGuessedCorrectly ? 'Another One!' : 'Try Again?'}
			</Button>
		</S.Wrapper>
	);
};

export default Answer;
