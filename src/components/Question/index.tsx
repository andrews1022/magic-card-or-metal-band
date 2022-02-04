import React from 'react';

// material icons
import CropPortraitIcon from '@material-ui/icons/CropPortrait';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../../actions/game';

// custom hooks
import useName from '../../hooks/useName';

// styled components
import { Button } from '../UI/Button';
import { Wrapper } from '../UI/Wrapper';
import * as S from './styles';

// constants
import { MAGIC_CARD, METAL_BAND } from '../../constants/constants';

// types
import { CombinedAppState, GameState } from '../../types/types';

const Question = () => {
	// grabbing various pieces of state from redux store
	const game = useSelector<CombinedAppState, GameState>((state) => state.game);

	// dispatch hook call
	const dispatch = useDispatch();

	// set some vars to make jsx cleaner
	const nameToUse = useName();

	const answerSelectionHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		const { value } = event.currentTarget.dataset;
		const { correctAnswer } = game;

		return value === correctAnswer ? dispatch(setAnswer(true)) : dispatch(setAnswer(false));
	};

	return (
		<Wrapper>
			<h1>
				Is <S.Name>{nameToUse}</S.Name> a Magic Card, or a Metal Band?
			</h1>

			<S.ButtonRow>
				<Button
					color='bunting'
					data-value={MAGIC_CARD}
					onClick={answerSelectionHandler}
					type='button'
				>
					<CropPortraitIcon fontSize='large' /> Magic Card
				</Button>

				<Button
					color='bunting'
					data-value={METAL_BAND}
					onClick={answerSelectionHandler}
					type='button'
				>
					<MusicNoteIcon fontSize='large' /> Metal Band
				</Button>
			</S.ButtonRow>
		</Wrapper>
	);
};

export default Question;
