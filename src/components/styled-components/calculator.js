import styled from 'styled-components';
import * as variables from './variables.js';

const Calculator = styled.div`
  // Positioning
  z-index: 0;
  // Display and Box Model
  background-color: ${variables.gray_100};
  border-radius: ${variables.calculator_border_radius};
  border-top-color: ${variables.white_100};
  border-left-color: ${variables.white_50};
  border-bottom-color: ${variables.black_100};
  border-right-color: ${variables.black_50};
  border-style: solid;
  border-width: ${variables.border_width};
  box-shadow: 0 1.25rem 0 ${variables.black_100};
  display: grid;
  gap: ${variables.gap_width};
  grid-template-areas:
    'name'
    'screen'
    'keypad';
  height: auto;
  justify-content: center;
  padding: ${variables.column_width};
  width: calc((${variables.column_width} * 4) + (${variables.gap_width} * 3) + (${variables.column_width} * 2) + (${variables.border_width} * 2)); //4 buttons + 3 gaps + 2 padding + 2 border
  // Typography
  // Other
`
export default Calculator;