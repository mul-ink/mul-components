import { useCSS, html, css, component } from 'https://deno.land/x/mulink@0.0.16/deps.js';
function MulButton(element) {
  useCSS(element, [mulButtonCss])
  return html`
    ${buttonTemplate(element)}
  `
}

const buttonTemplate = ({ disabled, onclick}) => html`
    <button type="button" ?disabled=${disabled} @click=${onclick}>
      <slot></slot>
    </button>
`

MulButton.observedAttributes = ['disabled', 'onclick']


const mulDisabledButton = css`
button:disabled {
      background: grey;
      cursor: default;
  }
`

const mulDefaultButton = css`
button {
    background: orange;
    cursor: pointer;
}
`

const mulButtonCss = css`
  ${mulDefaultButton}
  ${mulDisabledButton}
`

customElements.define("mul-button", component(MulButton))
