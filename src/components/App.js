import React, {useState} from 'react';
import Wrapper from './styled-components/wrapper.js';
import Calculator from './styled-components/calculator.js';
import Name from './styled-components/name.js';
import Display from './styled-components/display.js';
import Numbers from './styled-components/numbers.js';
import KeyPad from './styled-components/keyPad.js';
import Button from './styled-components/button.js';

function App() {
  // Display State
  const initialState = {
    result: '0',
    formula: ''
  }
  const [result, setResult] = useState(initialState.result);
  const [formula, setFormula] = useState(initialState.formula);

  return (
    <Wrapper id='wrapper'>
      <Calculator id='calculator'>
        <Name id='name'>Calculator</Name>
        <Display id='display'>
          <Numbers className='numbers'>
            1234567890
          </Numbers>
        </Display>
        <KeyPad id='keypad'>
          <Button id='clear' color="orange">C</Button>
          <Button id='divide' color="gray">÷</Button>
          <Button id='multiply' color="gray">×</Button>
          <Button id='subtract' color="gray">-</Button>
          <Button id='seven'>7</Button>
          <Button id='eight'>8</Button>
          <Button id='nine'>9</Button>
          <Button id='add' color="gray">+</Button>
          <Button id='four'>4</Button>
          <Button id='five'>5</Button>
          <Button id='six'>6</Button>
          <Button id='equals' color="gray">=</Button>
          <Button id='one'>1</Button>
          <Button id='two'>2</Button>
          <Button id='three'>3</Button>
          <Button id='zero'>0</Button>
          <Button id='decimal'>•</Button>
        </KeyPad>
      </Calculator>
    </Wrapper>
  );
}

export default App;