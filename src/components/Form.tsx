import React from 'react'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import styled from 'styled-components'

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`

interface Props {
  chord: string
  setChord: (chord: string) => void
}

const Form: React.FC<Props> = ({
  chord,
  setChord,
}) => {
  return (
    <Wrapper>
      <FormControl sx={{ m: 0 }}>
        <TextField
          id='chord'
          label='Chord Name'
          value={chord}
          defaultValue=''
          onChange={(e: any) => setChord(e?.target?.value || '')}
        />
      </FormControl>
    </Wrapper>
  )
}

export default Form;