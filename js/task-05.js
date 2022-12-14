const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", getName);

function getName(event) {
  return inputEl.value === ""
    ? (outputEl.textContent = "Anonymous")
    : (outputEl.textContent = event.currentTarget.value);
}
