// Styled Components
import styled from 'styled-components';
// Variables
import * as variables from './variables.js';

const Numbers = styled.p`
  // Positioning
  bottom: ${variables.gap_width};
  left: ${variables.gap_width};
  position: absolute;
  right: ${variables.gap_width};
  top: ${variables.gap_width};
  // Display and Box Model
  height: 4rem;
  margin: 0;
  overflow: hidden;
  width: calc((${variables.column_width} * 4) + (${variables.gap_width} * 1));
  // Typography
  color: ${variables.cyan_100};
  font-family: ${variables.font_stack_digital};
  font-size: inherit;
  font-weight: 400;
  line-height: 4rem;
  text-align: end;
  text-shadow:
    0 0px 1px ${variables.cyan_dark_100},
    0 0px 2px ${variables.cyan_dark_100},
    0 0px 5px ${variables.cyan_dark_100};
  text-transform: uppercase;
  // Other

  &:before {
  // Positioning
  position: absolute;
  // Display and Box Model
  display: block;
  opacity: 0.1;
  // Typography
  // Other
  content: '@@@@@@@@@@@@';
  }
`

export default Numbers;