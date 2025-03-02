const calculateButton = document.getElementById('calculate');
const num1Input = document.getElementById('num1');
const operatorSelect = document.getElementById('operator');
const num2Input = document.getElementById('num2');
const resultParagraph = document.getElementById('result');

calculateButton.addEventListener('click', (e) => {
  e.preventDefault();
  const num1 = parseFloat(num1Input.value);
  const operator = operatorSelect.value;
  const num2 = parseFloat(num2Input.value);

  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid operator';
  }

  resultParagraph.textContent = `Result: ${result}`;
});