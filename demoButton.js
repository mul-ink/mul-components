import { css, html, render } from './deps.js';
import { darkBackground } from './cssTokens.js';

const bodyCSS = css`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${darkBackground};
    height: 300px;
  }
`

const demoStyle = html`
  <style>
    ${bodyCSS}
  </style>
`
const head = document.head || document.getElementsByTagName('head')[0];

render(demoStyle, head);
