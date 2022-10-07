const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const galleryElements = document.querySelector("#boxes");
const numberElements = document.querySelector("#controls input");
let amount = 0;

createBtn.addEventListener("click", () => createBoxes(amount));
destroyBtn.addEventListener("click", destroyBoxes);
numberElements.addEventListener("input", checkAmount);

function checkAmount(event) {
  return (amount = event.currentTarget.value);
}
let boxSize = 30;
function createBoxes(amount) {
  const arrayElements = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = createSizeBox(i);
    box.style.height = createSizeBox(i);
    arrayElements.push(box);
  }
  galleryElements.append(...arrayElements);
}

function createSizeBox(iter) {
  return `${boxSize + 10 * iter + galleryElements.children.length * 10}px`;
}

function destroyBoxes() {
  galleryElements.innerHTML = "";
  numberElements.value = "";
  boxSize = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
