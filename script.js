function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  // TODO: catch divide by zero case, maybe move the check to operate function
  return num1 / num2;
}

// declare operands and operator variables
let operand1, operand2, operator;

// execute function depending on the operator
function operate(sign, n1, n2) {
  switch (sign) {
    case 'plus':
      add(n1, n2);
      break;
    case 'minus':
      subtract(n1, n2);
      break;
    case 'asterisk':
      multiply(n1, n2);
      break;
    case 'slash':
      divide(n1, n2);
      break;
    default:
      return 'ERROR';
  }
}