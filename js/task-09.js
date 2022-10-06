const changeColorBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

changeColorBtn.addEventListener("click", onColorButton);

function onColorButton() {
  colorValue.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorValue.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
