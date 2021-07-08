import styled from 'styled-components';
import * as variables from './variables.js';
import StyledButton from './button.js';
import buttonContent from '../../assets/buttonContent.js';

const KeyPadContainer = styled.div`
  // Positioning
  // Display and Box Model
  display: grid;
  gap: ${variables.gap_width};
  grid-area: keypad;
  grid-template-areas:
    "clear divide multiply subtract"
    "seven eight nine add"
    "four five six add"
    "one two three equals"
    "zero zero decimal equals";
  height: auto;
  // Typography
  // Other
`
const parseMath = expression => { // ...or just save yourself the headache reinventing the wheel and use Math.js
  const parseMultiplication = input =>
    input.split('×')
      .map(parseDivision)
      .reduce((acc, num) => acc * num);

  const parseDivision = input =>
    input.split('÷')
      .map(parseFloat)
      .reduce((acc, num) => acc / num);

  const parseSubtraction = input => {
    if (input.includes('--')) {
      return parseAddition(input.replace('--', '+'));
    } else if (!input.includes('×-') && !input.includes('÷-')) {
      const numbersString = input.split('-'); // if no division/multiplication by a negative number is found
      // If the first string is empty then it was the start of a negative number
      if (numbersString[0].length === 0) {
        numbersString.splice(0, 1);
        numbersString[0] = '-' + numbersString[0];
      }
      return numbersString.map(parseMultiplication)
        .reduce((acc, num) => acc - num);
    } else {
      return parseMultiplication(input);
    }
  }

  const parseAddition = input =>
    input.split('+')
      .map(parseSubtraction)
      .reduce((acc, num) => acc + num);

  return parseAddition(expression);
}

const parseMathNew = expression => {
  const operators = ['+', '-', '÷', '×'];

  const characters = expression.split('');
  let stack = [];
  let lastIsNum = false;
  for (let i = 0; i < characters.length; i++) {
    const char = characters[i];
    if (char === '-') {
      lastIsNum = !lastIsNum
      stack.push(char);
    } else if (operators.includes(char)) {
      stack.push(char);
      lastIsNum = false;
    } else if (lastIsNum) {
      stack[stack.length - 1] += char;
    } else {
      stack.push(char);
      lastIsNum = true;
    }
  }

  stack = stack.map(x => operators.includes(x) ? x : parseFloat(x));

  const parse = (op, calc) => {
    for (let i = 0; i < stack.length; i++) {
      if (stack[i] === op) {
        stack.splice(i - 1, 3, calc(stack[i - 1], stack[i + 1]));
      }
    }
  };

  parse('÷', (a, b) => a / b);
  parse('×', (a, b) => a * b);
  parse('-', (a, b) => a - b);
  parse('+', (a, b) => a + b);

  return stack[0];
};

const KeyPad = ({result, setResult, formula, setFormula}) => {

  const operators = ['+','-','÷','×'];
  const lastFormulaCharacter = formula[formula.length - 1];
  const isNextToLastSymbolOperator = operators.includes(formula[formula.length - 2]);

  const handleClick = (symbol) => {
    switch (symbol) {
      case 'C':
        setResult('0'); // reset the result screen to 0
        setFormula(''); // clear the formula screen
        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (result === '0') {
          setResult(symbol); // remove the leading 0 and replace it with the number
        } else if (lastFormulaCharacter === '=') {
          setFormula(''); // clear the formula screen
          setResult(symbol); // start a new calculation
        } else {
          setResult(result + symbol); // concat the number to the current result
        }
        break;
      case '.':
        if (!result.includes('.')) {
          setResult(result + symbol); // only concat one decimal point to the number
        }
        break;
      case '0':
        if (result !== '0') {
          setResult(result + symbol); // concat the 0 to the current result if the result is a number other than 0
        }
        break;
      case '+':
      case '-':
      case '÷':
      case '×':
        if (result.length === 0 && symbol !== '-' && !isNextToLastSymbolOperator) {
          setFormula(formula.slice(0, -1) + symbol); // replace the last operator (excluding -) with the most recent one
        } else if (lastFormulaCharacter === '=') {
          setFormula(result + symbol); // replace the formula with the result to start a new calculation on the result
        } else if (result.length === 0 && isNextToLastSymbolOperator) {
          setFormula(formula.slice(0, -2) + symbol); // if there exists two consecutive operators in a row replace all with most recent one
        } else if (symbol === '-' && result === '0' && formula.length === 0) {
          // If the result is 0 then this is the start of a negative number
          setFormula('-');
        } else {
          setFormula(formula + result + symbol); // concat the number and the operator to the formula screen
        }
        setResult(''); // clear the result screen
        break;
      case '=':
        // Only calculate if there's a result and we're not showing a completed calculation already
        if (result.length !== 0 && lastFormulaCharacter !== '=') {
          const output = formula + result; // get the current formula
          setFormula(output + '=');
          setResult(parseMath(output).toString());
        }
        break;
      default:
        break;
    }
  }

  const buttons = buttonContent.map((button) => {
    return (
      <StyledButton
        id={button.id}
        key={button.id}
        color={button.color}
        onClick={() => handleClick(button.symbol)}
      >
        <span className='front'>
          {button.symbol}
        </span>
        <span className='edge'></span>
        <span className='shadow'></span>
        <span className='hole'></span>
      </StyledButton>
    )
  });

  return (
    <KeyPadContainer id='keypad'>
      {buttons}
    </KeyPadContainer>
  );
};

export default KeyPad;