import React from 'react'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'

interface Props {
  chord: string
  setChord: (chord: string) => void
}

const Form: React.FC<Props> = ({
  chord,
  setChord,
}) => {
  return (
    <div>
      <FormControl sx={{ m: 1, width: `${100}%` }}>
        <TextField
          id='chord'
          label='Chord Name'
          value={chord}
          defaultValue=''
          onChange={(e: any) => setChord(e?.target?.value || '')}
        />
      </FormControl>
    </div>
  )
}

export default Form