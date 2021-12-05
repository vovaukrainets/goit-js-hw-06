
const counterValue = document.getElementById("value");
const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');

btnDec.addEventListener("click", () => {
  counterValue.textContent--;
});

btnInc.addEventListener("click", () => {
  counterValue.textContent++;
});