import { createGlobalStyle } from 'styled-components';
import Digital_Dream_Woff from '../../assets/fonts/Digital-Dream/Digitaldream.woff';
import Digital_Dream_Woff2 from '../../assets/fonts/Digital-Dream/Digitaldream.woff2';

const FontStyles = createGlobalStyle`
  // Digital Dream Font Family
  @font-face {
    font-family: 'Digital dream';
    src:
      local('Digital dream'),
      local('Digitaldream'),
      url(${Digital_Dream_Woff}) format('woff2'),
      url(${Digital_Dream_Woff2}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;

export default FontStyles;