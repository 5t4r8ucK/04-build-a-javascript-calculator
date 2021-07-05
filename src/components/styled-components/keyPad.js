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
const KeyPad = ({result, setResult, formula, setFormula}) => {


  const buttons = buttonContent.map((button) => {
    return (
      <StyledButton
        id={button.id}
        key={button.id}
        color={button.color}
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