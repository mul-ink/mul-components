import { useCSS, html, css, component } from 'https://deno.land/x/mulink@0.0.18/deps.js';

function MulHeart(element) {
  const onClick = () => element.classList.toggle('active')
  useCSS(element, [mulHeart])
  return html`
  <span @click=${onClick} class="heart" id="toggle-btn"></span>
  `
}

const color__bg = css`#111111`;
const icon__size = css`32px`;
const icon__default = css`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjIycHgiIHZpZXdCb3g9IjAgMCAyNCAyMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgPHRpdGxlPmljb25tb25zdHItaGVhcnQtdGhpbjwvdGl0bGU+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9Imljb25tb25zdHItaGVhcnQtdGhpbiIgZmlsbD0iI0ZGRkZGRiI+ICAgICAgICAgICAgPHBhdGggZD0iTTEyLDIwLjU5MyBDNi4zNywxNS4wNTQgMSwxMC4yOTYgMSw2LjE5MSBDMSwyLjQgNC4wNjgsMSA2LjI4MSwxIEM3LjU5MywxIDEwLjQzMiwxLjUwMSAxMiw1LjQ1NyBDMTMuNTksMS40ODkgMTYuNDY0LDEuMDEgMTcuNzI2LDEuMDEgQzIwLjI2NiwxLjAxIDIzLDIuNjMxIDIzLDYuMTkxIEMyMywxMC4yNiAxNy44NjQsMTQuODE2IDEyLDIwLjU5MyBNMTcuNzI2LDAuMDEgQzE1LjUyMywwLjAxIDEzLjI4LDEuMDUyIDEyLDMuMjQ4IEMxMC43MTUsMS4wNDIgOC40NzgsLTQuNDQwODkyMWUtMTYgNi4yODEsLTQuNDQwODkyMWUtMTYgQzMuMDk4LC00LjQ0MDg5MjFlLTE2IDAsMi4xODcgMCw2LjE5MSBDMCwxMC44NTIgNS41NzEsMTUuNjIgMTIsMjIgQzE4LjQzLDE1LjYyIDI0LDEwLjg1MiAyNCw2LjE5MSBDMjQsMi4xOCAyMC45MDUsMC4wMSAxNy43MjYsMC4wMSIgaWQ9IlNoYXBlIj48L3BhdGg+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=`;

const icon__active = css`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjIycHgiIHZpZXdCb3g9IjAgMCAyNCAyMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgPHRpdGxlPmljb25tb25zdHItZmF2b3JpdGUtMzwvdGl0bGU+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9Imljb25tb25zdHItZmF2b3JpdGUtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIC0wLjAwMDAwMCkiIGZpbGw9IiMxQ0I4NTQiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICAgICAgPHBhdGggZD0iTTEyLDMuMjQ4IEM4Ljg1MiwtMi4xNTQgMCwtMC41NzcgMCw2LjE5MiBDMCwxMC44NTMgNS41NzEsMTUuNjE5IDEyLDIyIEMxOC40MywxNS42MTkgMjQsMTAuODUzIDI0LDYuMTkyIEMyNCwtMC42IDE1LjEyNSwtMi4xMTQgMTIsMy4yNDggWiIgaWQ9IlBhdGgiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==`;

const mulHeart = css`
.container {
  width: 100vw;
  height: 100vh;
  background-color: ${color__bg};
  display: flex;
  justify-content: center;
  align-items: center;
}

.heart {
  width: ${icon__size};
  height: ${icon__size};
  background-image: url(${icon__default});
  background-repeat: no-repeat;
  background-size: 100%;
  transition: background-image 0.2s ease;
  cursor: pointer;
  opacity: 0.6;
  display: block;
}

.heart:active {
  background-image: url(${icon__active});
  opacity: 1;
}

.heart:hover {
 opacity: 1;
}
`

customElements.define("mul-heart", component(MulHeart))
