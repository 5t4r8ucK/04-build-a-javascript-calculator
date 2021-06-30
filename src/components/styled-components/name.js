import styled from 'styled-components';
import * as variables from './variables.js';

const Name = styled.div`
  // Positioning
  // Display and Box Model
  align-items: center;
  display: flex;
  grid-area: name;
  justify-content: center;
  // Typography
  color: ${variables.white_100};
  font-family: Arial, sans-serif;
  font-weight: 900;
  text-shadow:
    0px calc((${variables.hairline_width} * (-1))) 0px ${variables.black_100}, // shadow
    0px ${variables.hairline_width} 0px ${variables.white_100}; // highlight
  // Other
`

export default Name;