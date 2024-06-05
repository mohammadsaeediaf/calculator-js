const userInput = document.getElementById("userInput");

var expression = "";

function press(num) {
  expression += num;
  userInput.value = expression;
}

function equal() {
  expression = eval(expression);
  userInput.value = expression;
  expression = "";
}

function reset() {
  expression = "";
  userInput.value = expression;
}
