const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length === 6) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});