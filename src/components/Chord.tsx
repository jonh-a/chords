import React from 'react'
import Piano from './Piano'
import NoPiano from './NoPiano'
import Box from '@mui/material/Box'
import styled from 'styled-components'
import { getChordNotes, isSlashChord } from '../util'
import Play from './Play'

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 70vh;
  width: 100%;
`

interface Props {
  chord: string
  mobile: boolean
}

const Chord: React.FC<Props> = ({
  chord,
  mobile,
}) => {
  const notes = getChordNotes(chord)
  return (
    <Container>
      {
        mobile
          ? <NoPiano notes={notes} />
          : <Piano notes={notes} />
      }
      <Play notes={notes} isSlashChord={isSlashChord(chord)} />
    </Container>
  )
}

export default Chord