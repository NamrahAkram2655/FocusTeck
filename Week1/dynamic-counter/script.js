const counterElement = document.querySelector("#counter");
const increaseButton = document.querySelector("#increase-btn");
const decreaseButton = document.querySelector("#decrease-btn");
const resetButton = document.querySelector("#reset-btn");

let counter = 0;

function updateCounter() {
  counterElement.innerText = counter;
}

increaseButton.addEventListener("click", function () {
  counter++;
  updateCounter();
});

decreaseButton.addEventListener("click", function () {
  counter--;
  updateCounter();
});

resetButton.addEventListener("click", function () {
  counter = 0;
  updateCounter();
});
