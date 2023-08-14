import React, { useState } from 'react';
import Form from './components/Form';
import styled from 'styled-components';
import Paper from '@mui/material/Paper'
import Chord from './components/Chord';

const Wrapper = styled(Paper)`
  margin-left: .5em;
  margin-right: .5em;
`

const App = () => {
  const [chord, setChord] = useState<string>('Cmaj7/G');

  return (
    <Wrapper>
      <Form
        chord={chord}
        setChord={setChord}
      />
      <Chord
        chord={chord}
      />
    </Wrapper>
  )
}

export default App