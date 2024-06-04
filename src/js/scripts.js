const userInput = document.getElementById("userInput");

var expression = "";

function press(num) {
  expression += num;
  userInput.value = expression;
}

function equal() {
  console.log(expression.length);
  if (expression.length > 3) {
    expression = eval(expression);
    userInput.value = expression;
    //   expression = "";
  } else {
    return;
  }
}

function reset() {
  expression = "";
  userInput.value = expression;
}
