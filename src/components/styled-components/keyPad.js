import styled from 'styled-components';
import * as variables from './variables.js';

const KeyPad = styled.div`
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

export default KeyPad;