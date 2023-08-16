import React from 'react'
import Piano from './Piano'
import NoPiano from './NoPiano'
import Box from '@mui/material/Box'
import styled from 'styled-components'
import { getChordNotes } from '../util'

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
}) => (
  <Container>
    {
      mobile
        ? <NoPiano notes={getChordNotes(chord)} />
        : <Piano notes={getChordNotes(chord)} />
    }
  </Container>
);

export default Chord