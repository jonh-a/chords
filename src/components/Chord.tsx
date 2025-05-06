import React, { useState, useEffect } from 'react'
import Piano from './Piano'
import NoPiano from './NoPiano'
import Box from '@mui/material/Box'
import styled from 'styled-components'
import { isSlashChord, stripNumbersFromNotes, addNumbersToNotes, swapFlatsWithSharps } from '../util'
import { getChordByName, getChordByNotes } from 'parse-chord'
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
  const notes = addNumbersToNotes(getChordByName(chord)?.notes?.map((note: string) => swapFlatsWithSharps(note)) || []);
  const [selectedNotes, setSelectedNotes] = useState<string[]>([])

  useEffect(() => {
    if (searchBy === 'notes') {
      const strippedNotes = stripNumbersFromNotes(selectedNotes)
      setChord(getChordByNotes(strippedNotes).exactMatches?.[0]?.name || '')
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