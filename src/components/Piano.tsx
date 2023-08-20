import React from 'react';
import { notes as allNotes } from '../util'
import styled from 'styled-components'
import PianoKey from './PianoKey';
import Box from '@mui/material/Box'

const PianoWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-content: center;

  .piano-container {
    text-align: center;
    padding: 20px;
    width: 90%;
  }

  .piano {
    display: flex;
    justify-content: center;
    position: relative;
  }

  .piano-key {
    width: 40px;
    height: 150px;
    background-color: #fff;
    border: 1px solid #000;
    margin-right: -1px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 12px;
    font-weight: bold;
    position: relative;
    z-index: 1;
  }

  .black-key {
    background-color: #000;
    color: #fff;
    z-index: 2;
    width: 24px;
    height: 100px;
    margin-bottom: 70px;
    margin-right:-10px;
    margin-left: -15px;
    border: none;
    font-size: 10px;
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  @media (max-width: 768px) {
    .piano-key,
    .black-key {
      font-size: 0;
    }
    .piano-container {
      padding: 10px;
    }
  }

  @media (max-height: 390px) {
    .piano-key {
      width: 30px;
      height: 100px;
      font-size: 0;
    }
    .black-key {
      width: 25px;
      height: 70px;
      font-size: 0;
    }
    .piano-container {
      padding: 0px;
    }
  }

  .highlighted {
    background-color: #ffcc00;
  }
`

interface Props {
  notes: string[]
  selectedNotes: string[]
  setSelectedNotes: React.Dispatch<React.SetStateAction<string[]>>;
  setSearchBy: (searchBy: string) => void
  searchBy: string
}

const Piano: React.FC<Props> = ({
  notes,
  selectedNotes,
  setSelectedNotes,
  setSearchBy,
  searchBy,
}) => (
  <PianoWrapper>
    <div className="piano-container">
      <div className="piano">
        {allNotes.map((note) => (
          <PianoKey
            key={note}
            note={note}
            isHighlighted={notes.includes(note)}
            isBlackKey={note.includes('#')}
            selectedNotes={selectedNotes}
            setSelectedNotes={setSelectedNotes}
            setSearchBy={setSearchBy}
            searchBy={searchBy}
          />
        ))}
      </div>
    </div>
  </PianoWrapper>
);

export default Piano;
