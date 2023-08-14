import React from 'react';

interface Props {
  note: string;
  isHighlighted: boolean;
  isBlackKey: boolean;
}

const PianoKey: React.FC<Props> = ({ note, isHighlighted, isBlackKey }) => (
  <div className={`piano-key ${isHighlighted ? 'highlighted' : ''} ${isBlackKey ? 'black-key' : ''}`}>
    {(note?.endsWith('2') || note?.endsWith('3') || note?.endsWith('4'))
      ? note.substring(0, note.length - 1)
      : note
    }
  </div>
);

export default PianoKey;