import styled from 'styled-components'
import Box from '@mui/material/Box'

const Container = styled(Box)`
  display: flexbox;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Sorry = () => {
  return (
    <Container>
      <b>CSS is hard.</b>
    </Container>
  )
}

export default Sorry