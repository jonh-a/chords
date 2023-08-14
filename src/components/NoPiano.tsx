import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Container = styled(Box)`
  text-align: center;
  display: flexbox;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

interface Props {
  notes: string[];
}

const NoPiano: React.FC<Props> = ({
  notes
}) => {
  return (
    <Container sx={{ height: '50vh' }}>
      <Container sx={{ height: '5vh' }}>
        <Typography
          variant="h4"
          component="h4"
          width='100%'
        >
          {notes
            ?.map((note: string) => {
              if (note.endsWith('2') || note.endsWith('3') || note.endsWith('4')) {
                return note.substring(0, note.length - 1)
              }
              return note;
            })
            ?.join(" ")}
        </Typography>
      </Container>

      <Container sx={{ height: '10vh' }}>
        <Typography
          variant="subtitle1"
          width="100%"
        >
          Switch to landscape mode to see the piano thing.
        </Typography>
      </Container>
    </Container>
  )
}

export default NoPiano