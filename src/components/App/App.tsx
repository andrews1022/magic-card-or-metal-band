import React from 'react';

// material icons
import CropPortraitIcon from '@material-ui/icons/CropPortrait';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

// components
import Game from '../Game';
import Start from '../Start';

const App = () => (
	<div>
		<Game />
		<Start />

		<CropPortraitIcon />
		<MusicNoteIcon />
		<PlayArrowIcon />
	</div>
);

export default App;
