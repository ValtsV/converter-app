const output = document.getElementById("output");
output.style.visibility = "hidden";
const input = document.getElementById("userInput");
input.addEventListener("input", (e) => {
  const pounds = e.target.value;
  document.getElementById("gramsOutput").innerText = (
    pounds / 0.0022046
  ).toFixed(2);
  document.getElementById("kilogramsOutput").innerText = (
    pounds / 2.2046
  ).toFixed(2);
  document.getElementById("ozOutput").innerText = pounds * 16;
  output.style.visibility = "visible";
});

const ddPounds = document.getElementById("ddItemPounds");
const ddKilograms = document.getElementById("ddItemKilograms");
const ddGrams = document.getElementById("ddItemGrams");
const convertItem = document.getElementById("convertItem");

ddPounds.addEventListener("click", (e) => {
  removeDisable();
  update(e);
});

ddKilograms.addEventListener("click", (e) => {
  removeDisable();
  update(e);
});

ddGrams.addEventListener("click", (e) => {
  removeDisable();
  update(e);
});

const removeDisable = () => {
  ddPounds.classList.remove("disabled");
  ddKilograms.classList.remove("disabled");
  ddGrams.classList.remove("disabled");
};

const update = (e) => {
  e.target.classList.add("disabled");
  convertItem.textContent = e.target.text;
};
