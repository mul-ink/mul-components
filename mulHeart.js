import { useCSS, html, css, component, useState } from './deps.js';
import { iconColor } from './cssTokens.js'
import { heartLiked, heartNotLiked } from './mulHeartIcon.js'

function MulHeart(element) {
  const [isLiked, setIsLiked] = useState(true)
  const onClick = () => setIsLiked(!isLiked);
  const heart = isLiked ? heartLiked : heartNotLiked
  useCSS(element, [mulHeart])
  return html`
    <span @click=${onClick} class="heart" id="toggle-btn">
      ${heart}
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
