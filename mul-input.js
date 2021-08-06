import {
  html,
  component,
  useState,
  useEffect,
} from 'https://cdn.skypack.dev/haunted';
import 'https://deno.land/x/mulink@0.0.4/mul-button.js'

function MulInputs(el) {
  const [first, setFirst] = useState('John');
  const [last, setLast] = useState('Snow');

  useEffect(() => {
    const event = new CustomEvent('change', {
      detail: `${first} ${last}`
    });
    this.dispatchEvent(event);
  }, [first, last]);

  return html`
    <mul-button></mul-button>
    <div>
      <label for="first-name">First</label>
      <input
        value=${first}
        @keyup=${ev => setFirst(ev.target.value)}
        type="text"
        name="first"
        id="first-name"
      />

      <label for="last-name">Last</label>
      <input
        value=${last}
        @keyup=${ev => setLast(ev.target.value)}
        type="text"
        name="last"
        id="last-name"
      />
    </div>

    <style>
      div {
        border: none;
        display: grid;
        grid-template-columns: 20% 80%;
      }

      input {
        border: 1px solid #e5e5e5;
        padding: 6px 10px;
        margin-bottom: 1em;
      }
    </style>
  `;
}

customElements.define("mul-inputs", component(MulInputs));
