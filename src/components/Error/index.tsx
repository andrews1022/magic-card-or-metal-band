/* eslint-disable no-restricted-globals */

import React from 'react';

// material icons
import RefreshIcon from '@material-ui/icons/Refresh';

// styled components
import { Wrapper } from '../UI/Wrapper';

const Error = () => {
	const refreshHandler = () => {
		location.reload();
	};

	return (
		<Wrapper>
			<h1>Woops!</h1>

			<p>Something went wrong there. Please refresh and try again.</p>

			<button onClick={refreshHandler} type='button'>
				<RefreshIcon /> Refresh
			</button>
		</Wrapper>
	);
};

export default Error;
