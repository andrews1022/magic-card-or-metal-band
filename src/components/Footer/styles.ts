import styled from 'styled-components';

export const Footer = styled.footer`
	background-color: ${({ theme }) => theme.colors.bunting};
	color: ${({ theme }) => theme.shades.white};
	margin-top: auto;
	padding: 0 2%;
	text-align: center;

	@media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
		padding: 0 7.5%;
	}

	p {
		font-size: 0.875rem;
	}
`;
