import styled from 'styled-components';

// types
import type { ThemeColor } from '../../types/global';

export const Button = styled.button<ThemeColor>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;
  border: 2px solid ${({ color, theme }) => theme.colors[color]};
  border-radius: 0.5rem;
  color: ${({ color, theme }) => theme.colors[color]};
  cursor: pointer;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: all 250ms ease-in-out;

  @media (hover) {
    &:not(:disabled) {
      &:hover,
      &:active,
      &:focus {
        background-color: ${({ color, theme }) => theme.colors[color]};
        box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.075);
        color: ${({ theme }) => theme.shades.white};
        transform: translateY(-0.25rem);
      }
    }
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  @media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
    background-color: ${({ color, theme }) => theme.colors[color]};
    color: ${({ theme }) => theme.shades.white};
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
  }

  svg {
    margin-right: 1rem;
  }
`;
