// React
import React from 'react';
import ReactDOM from 'react-dom';
// Components
import App from './components/App';
// Fonts
import FontStyles from './components/styled-components/fontStyles';
// CSS
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);