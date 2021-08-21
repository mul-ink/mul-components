import { css } from './deps.js';
import { darkBackground } from './cssTokens.js';
const bodyCSS = css`
body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${darkBackground};
    width: 100vw;
    height: 100vh;
}
`
const head = document.head || document.getElementsByTagName('head')[0];
const bodyStyle = document.createElement('style');
bodyStyle.innerHTML = bodyCSS.cssText;
head.appendChild(bodyStyle);
