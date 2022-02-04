import { Buffer } from 'buffer';

const useAuth = (): string => {
	const envString = `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`;

	return `Basic ${Buffer.from(`${envString}`).toString('base64')}`;
};

export default useAuth;
