import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #222260;       /* Dark Blue */
    --secondary-color: #4CAF50;     /* Green */
    --accent-color: #FF5733;        /* Orange */
    --background-color: #F5F5F5;     /* Light Gray */
    --text-color: #333333;          /* Dark Text */
    --font-family: 'Arial', sans-serif;  /* Default Font */
    --border-radius: 4px;           /* Border Radius */
    --box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Box Shadow */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: var(--font-family);
  }

  body {
    font-family: 'Nunito', sans-serif;
    background-color: red;
    overflow:hidden;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    color:rgba(34, 34, 96, .6);
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
  }

  a:hover {
    color: var(--accent-color);
    text-decoration: underline;
  }

  button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: var(--secondary-color);
  }
`;
