import React from 'react'
import * as Tone from 'tone';
import Box from '@mui/material/Box'
import styled from 'styled-components'
import Button from '@mui/material/Button'

interface Props {
  notes: string[]
  isSlashChord: boolean
}

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 70vh;
  width: 100%;
`

const Play: React.FC<Props> = ({ notes, isSlashChord }) => {
  const synth = new Tone.PolySynth(Tone.AMSynth).toDestination();
  synth.set({
    harmonicity: 1,
    oscillator: {
      type: 'triangle20'
    }
  })

  const increaseNotesOctives = (notes: string[]): string[] => {
    return notes.map((note: string, index: number) => {
      if (index === 0 && isSlashChord) {
        return `${note}2`
      }

      if (note.endsWith('#') || note.endsWith("b") || note.length === 1) {
        return `${note}3`
      }

      else {
        const curOctive = Number(note.slice(-1));
        const newOctive = curOctive + (isSlashChord ? 2 : 3);
        return `${note.substring(0, note.length - 1)}${newOctive}`
      }
    })
  }

  const playNote = () => {
    const frequencies = increaseNotesOctives(notes).map(note => Tone.Frequency(note).toFrequency());
    synth.triggerAttackRelease(frequencies, '2');
  }

  return (
    <Container>
      <Button onClick={playNote}>Play Chord</Button>
    </Container>
  )
}

export default Play