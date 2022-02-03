/* eslint-disable no-restricted-globals */

import React from 'react';

const Error = () => {
	const refreshHandler = () => {
		location.reload();
	};

	return (
		<div className='error-wrapper'>
			<h1>Woops!</h1>

			<p>Something went wrong there. Please refresh and try again.</p>

			<button onClick={refreshHandler} type='button'>
				Refresh
			</button>
		</div>
	);
};

export default Error;
