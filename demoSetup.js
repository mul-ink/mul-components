import { css, html, render } from './deps.js';
import { darkBackground } from './cssTokens.js';
const bodyCSS = css`
body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${darkBackground};
    width: 300px;
    height: 100vh;
    margin-left: 250px;
}
`
const twoButtons = css`
body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${darkBackground};
    width: 300px;
    height: 100vh;
    margin-left: 250px;
}
`

const demoStyle = html`
<style>
    ${bodyCSS}
    ${twoButtons}
</style>
`
const head = document.head || document.getElementsByTagName('head')[0];
render(demoStyle, head);
