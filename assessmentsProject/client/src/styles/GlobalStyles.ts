import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.6;
    direction: rtl;
    text-align: right;
  }

  header {
    background-color: #333;
    color: #fff;
    padding: 1rem;
  }

  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }

  nav a {
    color: #fff;
    text-decoration: none;
  }

  section {
    padding: 2rem;
    text-align: center;
  }

  footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
    position: fixed;
    width: 100%;
    bottom: 0;
  }
`;

export default GlobalStyles;
