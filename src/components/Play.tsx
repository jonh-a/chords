import React, { useState, useEffect } from 'react'
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

  @media (max-width: 768px) {
    margin-top: 5em;
  }
`

const Play: React.FC<Props> = ({ notes, isSlashChord }) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [sampler, setSampler] = useState<Tone.Sampler | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const piano = new Tone.Sampler({
      urls: {
        A0: "A0.mp3",
        C1: "C1.mp3",
        "D#1": "Ds1.mp3",
        "F#1": "Fs1.mp3",
        A1: "A1.mp3",
        C2: "C2.mp3",
        "D#2": "Ds2.mp3",
        "F#2": "Fs2.mp3",
        A2: "A2.mp3",
        C3: "C3.mp3",
        "D#3": "Ds3.mp3",
        "F#3": "Fs3.mp3",
        A3: "A3.mp3",
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
        C5: "C5.mp3",
        "D#5": "Ds5.mp3",
        "F#5": "Fs5.mp3",
        A5: "A5.mp3",
        C6: "C6.mp3",
        "D#6": "Ds6.mp3",
        "F#6": "Fs6.mp3",
        A6: "A6.mp3",
        C7: "C7.mp3",
        "D#7": "Ds7.mp3",
        "F#7": "Fs7.mp3",
        A7: "A7.mp3",
        C8: "C8.mp3"
      },
      baseUrl: "https://tonejs.github.io/audio/salamander/",
      onload: () => {
        setSampler(piano);
        setError(null);
      },
      onerror: (err) => {
        console.error('Sampler error:', err);
        setError('Failed to load piano samples');
      }
    }).toDestination();

    return () => {
      piano.dispose();
    };
  }, []);

  const increaseNotesOctives = (notes: string[]): string[] => {
    return notes.map((note: string) => {
      if (!note.endsWith("1") && !note.endsWith("2") && !note.endsWith("3")) {
        return `${note}1`
      }
      if (note.endsWith("1")) return `${note.substring(0, note.length - 1)}2`
      if (note.endsWith("2")) return `${note.substring(0, note.length - 1)}3`
      if (note.endsWith("3")) return `${note.substring(0, note.length - 1)}4`
      return `${note}5`
    })
  }

  const playNote = () => {
    if (!sampler) {
      setError('Piano samples not loaded yet');
      return;
    }

    try {
      const frequencies = increaseNotesOctives(notes);
      console.log('Playing notes:', frequencies)
      sampler.triggerAttackRelease(frequencies, '2');
      setPlaying(true);
      setError(null);
      setTimeout(() => setPlaying(false), 2000)
    } catch (err) {
      console.error('Error playing notes:', err);
      setError('Error playing notes');
      setPlaying(false);
    }
  }

  return (
    <Container>
      <Button onClick={playNote} disabled={playing || !sampler}>Play</Button>
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
    </Container>
  )
}

export default Play