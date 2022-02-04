import styled from 'styled-components';

export const Name = styled.span`
	color: ${({ theme }) => theme.colors.bunting};
	opacity: 0.85;
`;

export const ButtonRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 1.5%;

	@media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
		flex-direction: column;
	}

	button {
		margin: 0 1rem;

		@media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
			margin: 1rem 0;
		}
	}
`;
