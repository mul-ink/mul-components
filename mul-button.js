import {
  html,
  component,
  useState,
} from "https://unpkg.com/haunted/haunted.js";

function MulButton() {
  const [name, setName] = useState("Add to Favorites");

  return html`
    <button type="button" @click=${(ev) => setName("Added, thanks")}>
      ${name}
    </button>
    <style>
      button {
        background: yellow;
      }
    </style>
  `;
}


customElements.define("mul-button", component(MulButton));
