import React, { useState } from 'react';
import Form from './components/Form';
import styled from 'styled-components';
import Box from '@mui/material/Box'
import Chord from './components/Chord';

const Wrapper = styled(Box)`
`

const App = () => {
  const [chord, setChord] = useState<string>('C maj');

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