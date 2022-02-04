import styled from 'styled-components';

export const Wrapper = styled.div`
	margin: auto auto 0 auto;
	padding: 1.5% 0;
	text-align: center;
	width: 66%;

	@media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
		padding: 3.5% 0;
		width: 85%;
	}
`;
