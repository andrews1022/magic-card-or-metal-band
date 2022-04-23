import styled from 'styled-components';

// custom types
import type { ThemeColor } from '../../types/global';

// props type
type WrapperProps = {
  isInView: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  max-height: ${({ isInView }) => (isInView ? '200rem' : '0rem')};
  opacity: ${({ isInView }) => (isInView ? 1 : 0)};
  overflow: hidden;
  pointer-events: ${({ isInView }) => (isInView ? 'all' : 'none')};
  width: ${({ isInView }) => (isInView ? '100%' : '0%')};
  transition: max-height 750ms ease-in-out, opacity 750ms ease-in-out;
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
