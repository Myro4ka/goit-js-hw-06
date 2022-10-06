const controlEl = document.querySelector("#font-size-control");
const element = document.querySelector("#text");

controlEl.addEventListener("input", (event) => {
  element.style.fontSize = `${event.currentTarget.value}px`;
});
