const cfg = document.forms[0];
const svg = document.querySelector("object");

drawKeys();
drawLabels();

async function setLayout(name) {
  const response = await fetch(`layouts/${name}.json`);
  const result   = await response.json();
  svg.contentWindow.setLayout(result.keymap);
}

const applyConfig = () => {
  const vim = document.getElementById("option-vim").checked;
  const data = Object.fromEntries(new FormData(cfg));
  setLayout(data.layout.toLowerCase());
  svg.contentWindow.setGeometry(data.geometry);
  svg.contentWindow.setConfig(data.flavor.toLowerCase(), vim);
};

svg.addEventListener("load", applyConfig);
cfg.addEventListener("change", applyConfig);
