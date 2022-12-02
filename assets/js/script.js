// Função da contagem dos pontos
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

// Função da contagem dos Sets
var currentNumberWrapperSet1 = document.getElementById("currentNumber3");
var currentNumber3 = 0;

function increment3() {
  currentNumber3 = currentNumber3 + 1;
  currentNumberWrapperSet1.innerHTML = currentNumber3;
}

var currentNumberWrapperSet2 = document.getElementById("currentNumber4");
var currentNumber4 = 0;

function increment4() {
  currentNumber4 = currentNumber4 + 1;
  currentNumberWrapperSet2.innerHTML = currentNumber4;
}

// Função Zerar

function zerar() {
  currentNumber1 = 0;
  currentNumberWrapper1.innerHTML = currentNumber1;

  currentNumber2 = 0;
  currentNumberWrapper2.innerHTML = currentNumber2;

  currentNumber3 = 0;
  currentNumberWrapperSet1.innerHTML = currentNumber3;

  currentNumber4 = 0;
  currentNumberWrapperSet2.innerHTML = currentNumber4;
}
