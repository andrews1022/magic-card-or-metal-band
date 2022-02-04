import styled from 'styled-components';

// types
import { ThemeColor } from '../../types/types';

type WrapperProps = {
	isInView: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
	max-height: ${({ isInView }) => (isInView ? '200rem' : '0rem')};
	opacity: ${({ isInView }) => (isInView ? 1 : 0)};
	pointer-events: ${({ isInView }) => (isInView ? 'all' : 'none')};
	transition: all 500ms ease-in-out;
`;

export const Correct = styled.span<ThemeColor>`
	color: ${({ color, theme }) => theme.colors[color]};
	font-size: 1.25rem;
	font-weight: 700;
`;

export const Name = styled.span`
	color: ${({ theme }) => theme.colors.bunting};
	font-size: 1.25rem;
	font-weight: 700;
	opacity: 0.85;
`;

export const Type = styled.span`
	color: ${({ theme }) => theme.colors.bunting};
	font-size: 1.25rem;
	font-weight: 700;
	text-transform: capitalize;
	opacity: 0.85;
`;

export const Image = styled.img`
	margin: 0 auto 1.5% auto;
	width: 17.5rem;

	@media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
		margin: 0 auto 5% auto;
	}
`;