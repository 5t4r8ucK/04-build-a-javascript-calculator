// Styled Components
import styled, { css } from 'styled-components';
//
import * as variables from './variables.js';

const handleColorType = (color) => {
  switch (color) {
    case "gray":
      return (
        css`
          color: ${variables.white_100};
          background-color: ${variables.black_50};
        `
      )
    case "orange":
      return (
        css`
          color: ${variables.black_100};
          background-color: ${variables.orange_100};
        `
      )
    default:
      return (
        css`
          color: ${variables.black_100};
          background-color: ${variables.white_100};
        `
      )
  }
};

const StyledButton = styled.button`
  // Positioning
  // Display and Box Model
  border-radius: ${variables.button_border_radius};
  border: ${variables.hairline_width} solid ${variables.black_50};
  display: inline-block;
  min-width: ${variables.column_width};
  min-height: ${variables.column_width};
  padding: 0;
  // Typography
  font-family: ${variables.font_stack_sans_serif};
  font-size: 2rem;
  font-weight: 500;

  ${({ color }) => handleColorType(color)};


  &#clear {
    // Positioning
    // Display and Box Model
    grid-area: clear;
    // Typography
    // Other
  }
  &#divide {
    // Positioning
    // Display and Box Model
    grid-area: divide;
    // Typography
    // Other
  }
  &#multiply {
    // Positioning
    // Display and Box Model
    grid-area: multiply;
    // Typography
    // Other
  }
  &#subtract {
    // Positioning
    // Display and Box Model
    grid-area: subtract;
    // Typography
    // Other
  }
  &#seven {
    // Positioning
    // Display and Box Model
    grid-area: seven;
    // Typography
    // Other
  }
  &#eight {
    // Positioning
    // Display and Box Model
    grid-area: eight;
    // Typography
    // Other
  }
  &#nine {
    // Positioning
    // Display and Box Model
    grid-area: nine;
    // Typography
    // Other
  }
  &#add {
    // Positioning
    // Display and Box Model
    grid-area: add;
    // Typography
    // Other
  }
  &#four {
    // Positioning
    // Display and Box Model
    grid-area: four;
    // Typography
    // Other
  }
  &#one {
    // Positioning
    // Display and Box Model
    grid-area: one;
    // Typography
    // Other
  }
  &#two {
    // Positioning
    // Display and Box Model
    grid-area: two;
    // Typography
    // Other
  }
  &#three {
    // Positioning
    // Display and Box Model
    grid-area: three;
    // Typography
    // Other
  }
  &#equals {
    // Positioning
    // Display and Box Model
    grid-area: equals;
    // Typography
    // Other
  }
  &#zero {
    // Positioning
    // Display and Box Model
    grid-area: zero;
    // Typography
    // Other
  }
  &#decimal {
    // Positioning
    // Display and Box Model
    grid-area: decimal;
    // Typography
    // Other
  }
`

export default StyledButton;