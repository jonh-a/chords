import React from 'react'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import styled from 'styled-components'

interface Props {
  chord: string
  setChord: (chord: string) => void
}

const Container = styled(Box)`
  width: 100%;
  display: flexbox;
  justify-content: center;
  align-items: center;
`

const Form: React.FC<Props> = ({
  chord,
  setChord,
}) => {
  return (
    <Container>
      <FormControl sx={{ m: 4 }}>
        <TextField
          id='chord'
          label='Chord Name'
          value={chord}
          defaultValue=''
          onChange={(e: any) => setChord(e?.target?.value || '')}
        />
      </FormControl>
    </Container>
  )
}

export default Form