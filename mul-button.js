import {
  html,
  component,
  useState,
  css,
  useCSS,
} from "https://deno.land/x/mulink@0.0.16/deps.js";

function MulButton({ disabled }) {
  const [name, setName] = useState("Add to Favorites");
  useCSS(this, [mulButtonCss]);
  return html`
    <button .disabled=${disabled} type="button" @click=${(ev) => setName("Added, thanks")}>
      ${name}
    </button>
  `;
}

MulButton.observedAttributes = ['disabled']


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

customElements.define("mul-button", component(MulButton));
