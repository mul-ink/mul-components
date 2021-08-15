import { useCSS, html, css, component } from 'https://deno.land/x/mulink@0.0.18/deps.js';
import { icon__size, icon__default, icon__active } from './mul-heart-icon.js';

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
  width: ${icon__size};
  height: ${icon__size};
  background-image: url(${icon__default});
  background-repeat: no-repeat;
  background-size: 100%;
  transition: background-image 0.2s ease;
  cursor: pointer;
  opacity: 0.6;
  display: block;
}

.heart:active {
  background-image: url(${icon__active});
  opacity: 1;
}

.heart:hover {
 opacity: 1;
}
`

customElements.define("mul-heart", component(MulHeart))
