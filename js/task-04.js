let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", handleClick);
incrementBtn.addEventListener("click", handleClick);

function handleClick(event) {
  if (event.currentTarget === incrementBtn) {
    counterValue += 1;
  } else if (event.currentTarget === decrementBtn) {
    counterValue -= 1;
  }
  return (valueEl.textContent = counterValue);
}
