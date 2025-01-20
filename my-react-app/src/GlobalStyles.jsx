import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Сброс основных стилей */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-size: 62.5%; /* Устанавливаем базовую единицу измерения для удобства (1rem = 10px) */
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 1.6rem; /* 16px */
    line-height: 1.6;
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
		margin: 0;
  	/* display: flex;
  	place-items: center; */
  	min-width: 320px;
  	min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    line-height: 1.2;
    /* margin-bottom: 1.6rem; */
  }

  /* p {
    margin-bottom: 1.6rem;
  } */

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style-type: none;
    padding-left: 0;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    appearance: none;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  input, textarea {
    border: 1px solid #ccc;
    padding: 1em;
    font-size: 1.6rem;
    &::placeholder {
      color: #999;
    }
  }

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

export default GlobalStyles;
