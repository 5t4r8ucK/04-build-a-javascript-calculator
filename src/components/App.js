import React, {useState} from 'react';
import Wrapper from './styled-components/wrapper.js';
import Calculator from './styled-components/calculator.js';
import Name from './styled-components/name.js';
import Display from './styled-components/display.js';
import KeyPad from './styled-components/keyPad.js';

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
        <Display
          result={result}
          formula={formula}
        />
        <KeyPad
          result={result}
          setResult={setResult}
          formula={formula}
          setFormula={setFormula}
        />
      </Calculator>
    </Wrapper>
  );
}

export default App;