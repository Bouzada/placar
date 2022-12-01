var currentNumberWrapper1 = document.getElementById("currentNumber1");
var currentNumber1 = 0;

function increment1() {
  currentNumber1 = currentNumber1 + 1;
  currentNumberWrapper1.innerHTML = currentNumber1;
}

function decrement1() {
  currentNumber1 = currentNumber1 - 1;
  currentNumberWrapper1.innerHTML = currentNumber1;
}

var currentNumberWrapper2 = document.getElementById("currentNumber2");
var currentNumber2 = 0;

function increment2() {
  currentNumber2 = currentNumber2 + 1;
  currentNumberWrapper2.innerHTML = currentNumber2;
}

function decrement2() {
  currentNumber2 = currentNumber2 - 1;
  currentNumberWrapper2.innerHTML = currentNumber2;
}
