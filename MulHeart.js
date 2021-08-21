import { useCSS, html, css, component } from './deps.js';
import { iconColor } from './cssTokens.js'
import { heartIcon } from './mulHeartIcon.js'

function MulHeart(element) {
  const onClick = () => element.classList.toggle('active')
  useCSS(element, [mulHeart])
  return html`
  <span @click=${onClick} class="heart" id="toggle-btn">
    ${heartIcon}
  </span>
  `
}

const mulHeart = css`
.heart {
  width: 30px;
  height: 30px;
  cursor: pointer;
  opacity: 0.6;
  display: block;
}

.heartIcon {
  fill: ${iconColor};
}

.heart:hover {
 opacity: 1;
}
`

customElements.define("mul-heart", component(MulHeart))
