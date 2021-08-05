import {
  html,
  component,
  useState,
} from "https://unpkg.com/haunted/haunted.js";

function Button() {
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

export default component(Button);
