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
const parseMath = (expression) => { // ...or just save yourself the headache reinventing the wheel and use Math.js

  const parseMultiplication = (expression) => {
    const numbersString = expression.split('×');
    const numbers = numbersString.map(num => parseFloat(num));
    const result = numbers.reduce((acc, num) => acc * num);
    return result;
  }
  const parseDivision = (expression) => {
    const numbersString = expression.split('÷');
    const numbers = numbersString.map(num => parseMultiplication(num));
    const result = numbers.reduce((acc, num) => acc / num);
    return result;
  }
  const parseSubtraction = (expression) => {
    let numbersString = [];
    let numbers = 0;
    if (!(expression.includes('×-') || expression.includes('÷-')) && !(expression.includes('--'))) {
      numbersString = expression.split('-'); // if no division/multiplication by a negative number is found
      numbers = numbersString.map(num => parseDivision(num));
    } else if (expression.includes('--')) {
      numbersString = numbersString.concat(expression.replace('--', '+')) // if subtracting a negative number
      numbers = numbersString.map(num => parseAddition(num));
    } else {
      numbersString = numbersString.concat(expression); // if dividing/multiplying by a negative number
      numbers = numbersString.map(num => parseDivision(num));
    }
    let initialValue = numbers[0];
    if (isNaN(initialValue)) {
      initialValue = 0; // subtract from 0 if the first number is negative (used only if you manually use parseMath in the console)
    }
    const result = numbers.reduce((acc, num) => acc - num); // exclude the first number as it's already been used
    return result;
  }
  const parseAddition = (expression) => {
    const numbersString = expression.split('+');
    const numbers = numbersString.map(num => parseSubtraction(num));
    const result = numbers.reduce((acc, num) => acc + num);
    return result;
  }
  const result = parseAddition(expression);
  return result;
}

const KeyPad = ({result, setResult, formula, setFormula}) => {

  const operators = ['+','-','÷','×'];
  const isLastSymbolOperator = operators.some(el => formula.slice(-1).includes(el));
  const isNextToLastSymbolOperator = operators.some(el => formula.slice(-2, -1).includes(el));

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
        } else if (formula.slice(-1).includes('=')) {
          setFormula(''); // clear the formula screen
          setResult(symbol); // start a new calculation
        } else {
          setResult(result + symbol); // concat the number to the current result
        }
        break;
      case '.':
        if (result.split('').filter(el => el === '.').length < 1) {
          setResult(result + symbol); // only concat one decimal point to the number
        }
        break;
      case '0':
        if (result === '0') {
          setResult(symbol); // there can only be one... 0
        } else if (result.includes('.')) {
          setResult(result + symbol); // ...but more if one decimal point exists
        } else {
          setResult(result + symbol); // concat the 0 to the current result if the result is a number other than 0
        }
        break;
      case '+':
      case '-':
      case '÷':
      case '×':
        if (result.length === 0 && isLastSymbolOperator && symbol !== '-' && !isNextToLastSymbolOperator) {
          setFormula(formula.slice(0, -1) + symbol); // replace the last operator in the formula with the most recent one (excluding -)
        } else if (formula.slice(-1).includes('=')) {
          setFormula(result + symbol); // replace the formula with the result to start a new calculation on the result
        } else if (result.length === 0 && isNextToLastSymbolOperator) {
          setFormula(formula.slice(0, -2) + symbol); // if there exists two consecutive operators in a row replace all with most recent one
        } else {
          setFormula(formula + result + symbol); // concat the number and the operator to the formula screen
        }
        setResult(''); // clear the result screen
        break;
      case '=':
        let output = 0;
        if (result.length === 0 && isLastSymbolOperator || formula.includes('=')) {
          setFormula(formula.slice(0, -1) + symbol); // if the operator is the last element replace it with equals // if equals exists don't concat another
          output = formula.slice(0, -1); // get the current formula (excluding the equals)
        } else {
          setFormula(formula + result + symbol); // concat the number and operator to the formula screen
          output = formula + result; // get the current formula
        }
        setResult(parseMath(output));
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
        {button.symbol}
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