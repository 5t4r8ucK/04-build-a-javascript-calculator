import styled from 'styled-components';
import * as variables from './variables.js';

const Display = styled.div`
  // Positioning
  position: relative;
  // Display and Box Model
  background-color: ${variables.blue_dark_100};
  border-radius: ${variables.button_border_radius};
  box-shadow: // black frame around the display
    inset calc((${variables.gap_width}) / 2) calc((${variables.gap_width}) / 2) 0 ${variables.black_10},
    inset calc((${variables.gap_width}) / 2 * (-1)) calc((${variables.gap_width}) / 2 * (-1)) 0 ${variables.black_10},
    inset calc((${variables.gap_width}) / 2) calc((${variables.gap_width}) / 2 * (-1)) 0 ${variables.black_10},
    inset calc((${variables.gap_width}) / 2 * (-1)) calc((${variables.gap_width}) / 2) 0 ${variables.black_10};
  grid-area: screen;
  grid-area: display;
  height: calc((${variables.gap_width}) * 2 + (4rem));
  width: 100%;
  // Typography
  font-size: 1.71rem;
  // Other

  &:before { // indent
    // Positioning
    bottom: -2px;
    left: -2px;
    position: absolute;
    top: -2px;
    right: -2px;
    z-index: -1;
    // Display and Box Model
    background-color: ${variables.black_100};
    border-style: solid;
    border-color: ${variables.black_100};
    border-width: ${variables.border_width};
    border-radius: 0.375rem; // 6px
    outline: ${variables.white_100} solid ${variables.border_width};
    // Typography
    // Other
    content: '';
  }

  &:after { // reflection
    // Positioning
    bottom: 0px;
    left: 0px;
    position: absolute;
    right: 0px;
    top: 0px;
    // Display and Box Model
    background:
      linear-gradient(
        135deg,
        ${variables.white_50} 0% 40%,
        ${variables.white_0} 40% 90%
      );
    border-radius: 0.25rem; // 4 px
    // Typography
    // Other
    content: '';
  }
`

export default Display;