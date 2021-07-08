import styled, { css } from 'styled-components';
import * as variables from './variables.js';

const handleId = (id) => {
  switch (id) {
    case 'formula':
      return (
        css`
          // Positioning
          // Display and Box Model
          min-height: 2rem;
          // Typography
          font-size: 1.075rem;
          line-height: 2rem;
          // Other

          &:before {
            // Positioning
            // Display and Box Model
            // Typography
            // Other
            content: '@@@@@@@@@@@@@@@@@@@@';
          }
        `
      )
    case 'display':
      return (
        css`
          // Positioning
          // Display and Box Model
          min-height: 4rem;
          // Typography
          font-size: 1.8rem;
          line-height: 4rem;
          // Other

          &:before {
            // Positioning
            // Display and Box Model
            // Typography
            // Other
            content: '@@@@@@@@@@@@';
          }
        `
      )
  }
};

const Numbers = styled.p`
  // Positioning
  z-index: 2;
  // Display and Box Model
  display: flex;
  justify-content: flex-end; // aligns before placeholders and text to the right
  margin: 0;
  overflow: hidden;
  width: 100%;
  // Typography
  color: ${variables.colors.cyan.hue};
  font-family: ${variables.font_stack_digital};
  font-weight: 400;
  text-align: end;
  text-shadow:
    0 0px 1px ${variables.cyan_dark_100},
    0 0px 2px ${variables.cyan_dark_100},
    0 0px 5px ${variables.cyan_dark_100};
  // Other

  &:before {
    // Positioning
    position: absolute;
    z-index: 1;
    // Display and Box Model
    display: block;
    opacity: 0.025;
    // Typography
    // Other
  }

  ${({ id }) => handleId(id)};
`

export default Numbers;