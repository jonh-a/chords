import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box'

const Container = styled(Box)`
  display: flexbox;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Sorry = () => {
  return (
    <Container>
      <p> <b>Why's it look like this?</b> CSS is hard so I asked ChatGPT to do the piano and now I don't know how to make it look better.</p>
    </Container>
  )
}

export default Sorry