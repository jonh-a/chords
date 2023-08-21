import React, { useState, useEffect } from 'react'
import Piano from './Piano'
import NoPiano from './NoPiano'
import Box from '@mui/material/Box'
import styled from 'styled-components'
import { getChordNotes, isSlashChord, guessChordByNotes } from '../util'
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
  searchBy: string
  setSearchBy: (searchBy: string) => void
  setChord: (chord: string) => void
}

const Chord: React.FC<Props> = ({
  chord,
  mobile,
  searchBy,
  setSearchBy,
  setChord,
}) => {
  const notes = getChordNotes(chord)
  const [selectedNotes, setSelectedNotes] = useState<string[]>([])

  useEffect(() => {
    if (searchBy === 'notes') {
      setChord(guessChordByNotes(selectedNotes))
    }
  }, [searchBy, setChord, selectedNotes])

  return (
    <Container>
      {
        mobile
          ? <NoPiano
            notes={searchBy === 'name' ? notes : selectedNotes}
          />
          : <Piano
            notes={notes}
            selectedNotes={selectedNotes}
            setSelectedNotes={setSelectedNotes}
            setSearchBy={setSearchBy}
            searchBy={searchBy}
          />
      }
      <Play
        notes={searchBy === 'name' ? notes : selectedNotes}
        isSlashChord={isSlashChord(chord)}
      />
    </Container>
  )
}

export default Chord