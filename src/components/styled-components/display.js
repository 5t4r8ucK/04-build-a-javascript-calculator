import styled from 'styled-components';
import * as variables from './variables.js';
import Numbers from './numbers.js';

const DisplayContainer = styled.div`
  // Positioning
  position: relative;
  // Display and Box Model
  align-items: flex-end;
  background-color: ${variables.blue_dark_100};
  border-radius: ${variables.button_border_radius};
  box-shadow: // black frame around the display
    inset calc((${variables.gap_width}) / 2) calc((${variables.gap_width}) / 2) 0 ${variables.black_10},
    inset calc((${variables.gap_width}) / 2 * (-1)) calc((${variables.gap_width}) / 2 * (-1)) 0 ${variables.black_10},
    inset calc((${variables.gap_width}) / 2) calc((${variables.gap_width}) / 2 * (-1)) 0 ${variables.black_10},
    inset calc((${variables.gap_width}) / 2 * (-1)) calc((${variables.gap_width}) / 2) 0 ${variables.black_10};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  grid-area: screen;
  height: auto;
  justify-self: center;
  justify-content: center;
  padding: ${variables.gap_width};
  width: calc((${variables.column_width} * 4) + (${variables.gap_width} * 3) - (${variables.border_width} * 2)); //4 buttons + 3 gaps - 2 border
  // Typography
  font-size: 1.745rem;
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
    outline: ${variables.white_50} solid ${variables.hairline_width};
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
    z-index: 3;
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

const Display = ({result, formula}) => {

  return (
    <DisplayContainer id='screen'>
      <Numbers id='formula'>
        {formula}
      </Numbers>
      <Numbers id='display'>
        {result}
      </Numbers>
    </DisplayContainer>
  );
};

export default Display;