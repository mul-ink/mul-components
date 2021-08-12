import { html, component } from './deps.js'
import './mul-button.js'

function MulApp(element) {
  return html`
  ${appTemplate(element)}
  `
}

const appTemplate = () => html`
<mul-button>Test app</mul-button>
`

customElements.define("mul-app", component(MulApp))
