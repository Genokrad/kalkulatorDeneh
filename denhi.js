console.log("kakaska");

// const tax = document.querySelector(".tax");
// const time = document.querySelector(".time");
const resultOutput = document.querySelector(".result");
const submitBtn = document.querySelector(".submit");
const formInput = document.querySelector(".form");

formInput.addEventListener("input", inputFu);

let obj = {};

function inputFu(event) {
  obj[event.target.className] = event.target.value;
  const percentPerMinuts = 1.6666;
  const minutsInHour = 60;
  let workTime = 0 || +obj.hour * minutsInHour + +obj.minutes;
  let result = (+obj.tax / minutsInHour) * workTime;
  return result;
}

submitBtn.addEventListener("click", textOutputFu);

function textOutputFu(event) {
  resultOutput.textContent = inputFu(event);
}

// tax.addEventListener('input', sum)
