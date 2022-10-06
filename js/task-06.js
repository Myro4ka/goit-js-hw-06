const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", changeInput);

function changeInput(event) {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
}
