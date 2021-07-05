import styled, { css } from 'styled-components';
import * as variables from './variables.js';

const handleColorType = (color) => {
  switch (color) {
    case 'gray':
      return (
        css`
          color: ${variables.white_100};
          background-color: ${variables.black_50};
        `
      )
    case 'orange':
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

const handleId = (id) => {
  switch (id) {
    case 'clear':
      return (
        css`
          grid-area: clear;
        `
      )
    case 'divide':
      return (
        css`
          grid-area: divide;
        `
      )
    case 'multiply':
      return (
        css`
          grid-area: multiply;
        `
      )
    case 'subtract':
      return (
        css`
          grid-area: subtract;
        `
      )
    case 'seven':
      return (
        css`
          grid-area: seven;
        `
      )
    case 'eight':
      return (
        css`
          grid-area: eight;
        `
      )
    case 'nine':
      return (
        css`
          grid-area: nine;
        `
      )
    case 'add':
      return (
        css`
          grid-area: add;
        `
      )
    case 'four':
      return (
        css`
          grid-area: four;
        `
      )
    case 'one':
      return (
        css`
          grid-area: one;
        `
      )
    case 'two':
      return (
        css`
          grid-area: two;
        `
      )
    case 'three':
      return (
        css`
          grid-area: three;
        `
      )
    case 'equals':
      return (
        css`
          grid-area: equals;
        `
      )
    case 'zero':
      return (
        css`
          grid-area: zero;
        `
      )
    case 'decimal':
      return (
        css`
          grid-area: decimal;
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
  ${({ id }) => handleId(id)};
`

export default StyledButton;