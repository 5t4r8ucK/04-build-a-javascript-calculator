import styled, { css } from 'styled-components';
import * as variables from './variables.js';

const handleColor = (color) => {
  switch (color) {
    case 'gray':
      return (
        css`
          // Typography
          color: ${variables.white_100};

          .edge {
            // Display and Box Model
            background:
              linear-gradient(
                0deg,
                ${variables.black_50} 0%,
                ${variables.black_0} 8%
              ),
              linear-gradient(
                to left,
                ${variables.colors.gray.shade} 0%,
                ${variables.colors.gray.tone} 8%,
                ${variables.colors.gray.tone} 92%,
                ${variables.colors.gray.shade} 100%
              );
          }

          .front {
            // Display and Box Model
            background:
              linear-gradient(
                0deg,
                ${variables.colors.gray.hue} 0%,
                ${variables.colors.gray.tint} 100%
              );
          }

          .hole {
            // Display and Box Model
            background:
              linear-gradient(
                45deg,
                ${variables.black_0} 10%,
                ${variables.black_50} 50%
              ),
              linear-gradient(
                135deg,
                ${variables.black_0} 10%,
                ${variables.black_50} 50%
              ),
              linear-gradient(
                225deg,
                ${variables.black_0} 10%,
                ${variables.black_50} 50%
              ),
              linear-gradient(
                315deg,
                ${variables.black_0} 10%,
                ${variables.black_50} 50%
              );
          }
        `
      )
    case 'orange':
      return (
        css`
          // Typography
          color: ${variables.black_100};

          .edge {
            // Display and Box Model
            background:
            linear-gradient(
                0deg,
                ${variables.black_50} 0%,
                ${variables.black_0} 8%
              ),
              linear-gradient(
                to left,
                ${variables.colors.orange.shade} 0%,
                ${variables.colors.orange.tone} 8%,
                ${variables.colors.orange.tone} 92%,
                ${variables.colors.orange.shade} 100%
              );
          }

          .front {
            // Display and Box Model
            background:
              linear-gradient(
                0deg,
                ${variables.colors.orange.hue} 0%,
                ${variables.colors.orange.tint} 100%
              );
          }

          .hole {
            // Display and Box Model
            background:
              linear-gradient(
                45deg,
                ${variables.black_0} 10%,
                ${variables.black_30} 50%
              ),
              linear-gradient(
                135deg,
                ${variables.black_0} 10%,
                ${variables.black_30} 50%
              ),
              linear-gradient(
                225deg,
                ${variables.black_0} 10%,
                ${variables.black_30} 50%
              ),
              linear-gradient(
                315deg,
                ${variables.black_0} 10%,
                ${variables.black_30} 50%
            );
          }
        `
      )
    default:
      return (
        css`
          // Typography
          color: ${variables.black_100};

          .edge {
            // Display and Box Model
            background:
              linear-gradient(
                0deg,
                ${variables.black_50} 0%,
                ${variables.black_0} 5%
              ),
              linear-gradient(
                to left,
                ${variables.colors.offwhite.shade} 0%,
                ${variables.colors.offwhite.tone} 8%,
                ${variables.colors.offwhite.tone} 92%,
                ${variables.colors.offwhite.shade} 100%
              );
          }

          .front {
            // Display and Box Model
            background:
              linear-gradient(
                0deg,
                ${variables.colors.offwhite.hue} 0%,
                ${variables.colors.offwhite.tint} 100%
              );
          }

          .hole {
            // Display and Box Model
            background:
              linear-gradient(
                45deg,
                ${variables.black_0} 10%,
                ${variables.black_10} 50%
              ),
              linear-gradient(
                135deg,
                ${variables.black_0} 10%,
                ${variables.black_10} 50%
              ),
              linear-gradient(
                225deg,
                ${variables.black_0} 10%,
                ${variables.black_10} 50%
              ),
              linear-gradient(
                315deg,
                ${variables.black_0} 10%,
                ${variables.black_10} 50%
            );
          }
        `
      )
  }
};

const StyledButton = styled.button`
  // Positioning
  position: relative;
  // Display and Box Model
  background: transparent;
  border-radius: ${variables.button_border_radius};
  box-shadow:
    0 0.1875rem 0.625rem ${variables.black_50}; // diffused shadow
  display: inline-block;
  min-width: ${variables.column_width};
  min-height: ${variables.column_width};
  outline-offset: 0.25rem;
  padding: 0;
  // Typography
  font-family: ${variables.font_stack_sans_serif};
  font-size: 2rem;
  font-weight: 500;
  text-shadow: 0 -0.0625rem 0 ${variables.black_50};
  // Other
  cursor: pointer;
  transition: filter 250ms;

  .edge {
    // Positioning
    left: 0;
    position: absolute;
    top: 0;
    z-index: 0;
    // Display and Box Model
    border-radius: ${variables.button_border_radius};
    height: 100%;
    width: 100%;
  }

  .front {
    // Positioning
    left: 0;
    position: absolute;
    top: 0;
    z-index: 1;
    // Display and Box Model
    align-items: center;
    border-radius: ${variables.button_border_radius};
    //box-shadow: inset 0px 1px 0px ${variables.white_50}; // top highlight
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 100%;
    // Other
    will-change: transform;
    transform: translateY(-0.25rem);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }

  .shadow {
    // Positioning
    left: 0;
    position: absolute;
    top: 0;
    z-index: -1;
    // Display and Box Model
    background: hsl(0deg 0% 0% / 0.10);
    border-radius: ${variables.button_border_radius};
    height: 100%;
    width: 100%;
    // Other
    will-change: transform;
    transform: translateY(0.25rem);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }

  .hole {
    // Positioning
    bottom: -2px;
    left: -2px;
    position: absolute;
    right: -2px;
    top: -2px;
    z-index: -1;
    // Display and Box Model
    border-radius: 0.4375rem;
  }

  &:hover {
    // Other
    filter: brightness(110%);

    .front {
      // Other
      transform: translateY(-0.375rem);
      transition:
        transform
        250ms
        cubic-bezier(.3, .7, .4, 1.5);
    }
    .shadow {
      // Other
      transform: translateY(0.375rem);
      transition:
        transform
        250ms
        cubic-bezier(.3, .7, .4, 1.5);
    }
  }

  &:active {

    .front {
      // Other
      transform: translateY(0rem);
      transition: transform 34ms;
    }
    .shadow {
      // Other
      transform: translateY(0rem);
      transition: transform 34ms;
    }
  }

  &:focus::not(::focus-visible) {
    // Display and Box Model
    outline: none;
  }

  ${({ color }) => handleColor(color)};
  grid-area: ${props => props.id};
`

export default StyledButton;