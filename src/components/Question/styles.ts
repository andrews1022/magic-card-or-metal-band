import styled from 'styled-components';

export const Name = styled.span`
	color: ${(props) => props.theme.colors.bunting};
	opacity: 0.85;
`;

export const ButtonRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 1.5%;

	@media ${(props) => props.theme.mediaQueries.tabletLandscape} {
		flex-direction: column;
	}

	button {
		margin: 0 1rem;

		@media ${(props) => props.theme.mediaQueries.tabletLandscape} {
			margin: 1rem 0;
		}
	}
`;
