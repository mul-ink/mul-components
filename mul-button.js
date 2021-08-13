import { useCSS, html, css, component } from './deps.js';
function MulButton(element) {
  useCSS(element, [mulButtonCss])
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
  height: var(--mul-spacing-09);
  padding-right: var(--mul-spacing-08);
  padding-left: var(--mul-spacing-03);
  background-color: var(--mul-interactive-01);
  color: var(--mul-text-04);
  font-size: var(--mul-body-short-01-font-size);
  font-weight: var(--mul-body-short-01-font-weight);
  line-height: var(--mul-body-short-01-line-height);
  letter-spacing: var(--mul-body-short-01-letter-spacing);
  border: transparent;
  cursor: pointer;
}
button:active {
  background-color: var(--mul-active-primary);
  cursor: default;
}
button:disabled {
  border-color: var(--mul-disabled-02,#c6c6c6);
  background: var(--mul-disabled-02,#c6c6c6);
  color: var(--mul-disabled-03,#8d8d8d);
  cursor: default;
}
button:focus {
  border-color: var(--mul-focus,#0f62fe);
  box-shadow: inset 0 0 0 1px var(--mul-focus,#0f62fe),inset 0 0 0 2px var(--mul-ui-background,#f4f4f4);
}
`

const mulButtonCss = css`
${mulDefaultButton}
`

customElements.define("mul-button", component(MulButton))
