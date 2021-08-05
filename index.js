import {
  html,
  component,
  useState,
} from "https://unpkg.com/haunted/haunted.js";

function App() {
  const [name, setName] = useState();

  return html`
    <h2>User Page</h2>

    <h3>${name}</h3>

    <fieldset>
      <legend>Change name:</legend>
      <name-inputs @change=${ev => setName(ev.detail)}></name-inputs>
    </fieldset>

    <style>
      h2 {
        color: red;
      }
      fieldset {
        border: none;
      }

      legend {
        padding: 0;
        margin-bottom: 0.5rem;
      }
    </style>
  `;
}

customElements.define("my-app", component(App));
