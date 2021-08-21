import { useCSS, html, css, component } from './deps.js';
import {
  bodyShortFontSize1, boxShadow, activePrimary, bodyShortFontWeight1, bodyShortLineHeight1, bodyShortLetterSpacing1,
  disabled2, disabled3, focus, interactive1, spacing3, spacing8, spacing9, text4
} from './cssTokens.js';
function MulButton(element) {
  useCSS(element, [mulDefaultButton])
  return html`
  ${buttonTemplate(element)}
  `
}
MulButton.observedAttributes = ['disabled', 'onclick']

const buttonTemplate = ({ disabled, onclick}) => html`
<button type="button" ?disabled=${disabled} @click=${onclick}>
  <slot></slot>
</button>
`

const mulDefaultButton = css`
button {
  height: ${spacing9};
  padding-right: ${spacing8};
  padding-left: ${spacing3};
  background-color: ${interactive1};
  color: ${text4};
  font-size: ${bodyShortFontSize1};
  font-weight: ${bodyShortFontWeight1};
  line-height: ${bodyShortLineHeight1};
  letter-spacing: ${bodyShortLetterSpacing1};
  border: transparent;
  cursor: pointer;
}
button:active {
  background-color: ${activePrimary};
  cursor: default;
}
button:disabled {
  border-color: ${activePrimary};
  background: ${disabled2};
  color: ${disabled3};
  cursor: default;
}
button:focus {
  border-color: ${focus};
  box-shadow: ${boxShadow};
}
`

customElements.define("mul-button", component(MulButton))
