import { html, component } from './deps.js'
import './MulButton.js'

function MulApp() {
  return html`
  <mul-button>Mul app</mul-button>
  `
}

customElements.define("mul-app", component(MulApp))
