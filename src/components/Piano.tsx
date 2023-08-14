import React from 'react';
import './Piano.css';

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

const Piano: React.FC<Props> = ({ notes }) => {
  const allNotes = [
    'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',
    'A2', 'A#2', 'B2', 'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2',
    'A3', 'A#3', 'B3', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A4'
  ];

  return (
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
};

export default Piano;
