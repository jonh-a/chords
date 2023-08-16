import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Wrapper = styled(Box)`
  text-align: center;
  display: flex;
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
    <Wrapper>
      <Box sx={{ width: '100%', textAlign: 'center' }}>
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
      </Box>

      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography
          variant="subtitle1"
          width="100%"
        >
          Switch to landscape mode to see the piano thing.
        </Typography>
      </Box>
    </Wrapper>
  )
}

export default NoPiano