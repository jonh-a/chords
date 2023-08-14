import React from 'react';
import './Piano.css';
import { notes as allNotes } from '../util'

interface PianoKeyProps {
  note: string;
  isHighlighted: boolean;
  isBlackKey: boolean;
}

const PianoKey: React.FC<PianoKeyProps> = ({ note, isHighlighted, isBlackKey }) => (
  <div className={`piano-key ${isHighlighted ? 'highlighted' : ''} ${isBlackKey ? 'black-key' : ''}`}>
    {(note?.endsWith('2') || note?.endsWith('3') || note?.endsWith('4'))
      ? note.substring(0, note.length - 1)
      : note
    }
  </div>
);

interface Props {
  notes: string[];
}

const Piano: React.FC<Props> = ({ notes }) => (
  <div className="piano-container">
    <div className="piano">
      {allNotes.map((note) => (
        <PianoKey
          key={note}
          note={note}
          isHighlighted={notes.includes(note)}
          isBlackKey={note.includes('#')}
        />
      ))}
    </div>
  </div >
);

export default Piano;
