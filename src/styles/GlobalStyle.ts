import { createGlobalStyle } from 'styled-components';
import theme from './theme';

// destructured theme properties
const { fonts, greys, mediaQueries } = theme;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;

    @media ${mediaQueries.desktopSmall} {
      font-size: 87.5%;
    }
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${greys.nero};
    font-family: ${fonts.fontRoboto};
    height: 100vh;
    line-height: 1;

    @media ${mediaQueries.tabletLandscape} {
      height: 100%;
    }
  }

  #root {
    padding: 3.5% 0;
    width: 66%;

    @media ${mediaQueries.tabletLandscape} {
      padding: 7% 0;
      width: 85%;
    }

    @media ${mediaQueries.mobileLarge} {
      padding: 10% 0;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    color: inherit;
    font-size: inherit;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3.25rem);
    line-height: 1.25;
  }

  p {
    font-size: 1.15rem;
    line-height: 1.45;
    margin: 1.5% auto;
    width: 66%;

    @media ${mediaQueries.tabletLandscape} {
      margin: 5% auto;
      width: 100%;
    }
  }

  button,
  input,
  textarea {
    font-family: ${fonts.fontRoboto};
  }

  img,
  svg {
    border: 0;
    display: block;
    height: auto;
    max-width: 100%;
  }

  a {
    &:link,
    &:visited {
      text-decoration: none;
    }

    @media (hover) {
      &:hover,
      &:active,
      &:focus {
        outline: 0;
        text-decoration: underline;
      }
    }
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  audio,
  canvas,
  video {
    display: inline-block;
    max-width: 100%;
    zoom: 1;
  }
`;

export default GlobalStyle;
