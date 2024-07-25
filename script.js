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

const one = document.querySelector('.digit.one');
const two = document.querySelector('.digit.two');
const three = document.querySelector('.digit.three');
const four = document.querySelector('.digit.four');
const five = document.querySelector('.digit.five');
const six = document.querySelector('.digit.six');
const seven = document.querySelector('.digit.seven');
const eight = document.querySelector('.digit.eight');
const nine = document.querySelector('.digit.nine');
const zero = document.querySelector('.digit.zero');

const plus = document.querySelector('.sign.plus');
const minus = document.querySelector('.sign.minus');
const asterisk = document.querySelector('.sign.asterisk');
const slash = document.querySelector('.sign.slash');

const clear = document.querySelector('.other.clear');
const equals = document.querySelector('.other.equals');