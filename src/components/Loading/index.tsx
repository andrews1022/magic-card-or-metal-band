import React from 'react';
import { CircularProgress } from '@material-ui/core';

// styled components
import { Wrapper } from '../UI/Wrapper';

const Loading = () => (
	<Wrapper>
		<CircularProgress size='4rem' style={{ marginBottom: '2rem' }} />

		<h1>Loading...</h1>
	</Wrapper>
);

export default Loading;
