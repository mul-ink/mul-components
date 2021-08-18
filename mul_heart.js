import { useCSS, html, css, component } from './deps.js';
import { icon_size, mul_heart_icon, mul_heart_icon_active } from './mul_heart_icon.js';

function MulHeart(element) {
  const onClick = () => element.classList.toggle('active')
  useCSS(element, [mulHeart])
  return html`
  <span @click=${onClick} class="heart" id="toggle-btn"></span>
  `
}

const color__bg = css`#111111`;
const mulHeart = css`
.container {
  width: 100vw;
  height: 100vh;
  background-color: ${color__bg};
  display: flex;
  justify-content: center;
  align-items: center;
}

.heart {
  width: ${icon_size};
  height: ${icon_size};
  background-image: url(${mul_heart_icon});
  background-repeat: no-repeat;
  background-size: 100%;
  transition: background-image 0.2s ease;
  cursor: pointer;
  opacity: 0.6;
  display: block;
}

.heart:active {
  background-image: url(${mul_heart_icon_active});
  opacity: 1;
}

.heart:hover {
 opacity: 1;
}
`

customElements.define("mul-heart", component(MulHeart))
