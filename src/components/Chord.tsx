import React from 'react'
import Piano from './Piano'

interface Props {
  chord: string
}

const Chord: React.FC<Props> = ({
  chord,
}) => {
  const getChordNotes = (chordName: string): string[] => {
    const notes = [
      'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',
      'A2', 'A#2', 'B2', 'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2',
      'A3', 'A#3', 'B3', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3',
    ];

    const chordStructures: { [index: string]: number[] } = {
      // triads
      'maj': [0, 4, 7],
      '': [0, 4, 7],
      'min': [0, 3, 7],
      'm': [0, 3, 7],
      '5': [0, 7],
      'sus2': [0, 2, 7],
      'sus4': [0, 5, 7],
      'dim': [0, 3, 6],

      // tetrads
      '6': [0, 4, 7, 9],
      '7': [0, 4, 7, 10],
      'maj7': [0, 4, 7, 11],
      'min7': [0, 3, 7, 10],
      'm7': [0, 3, 7, 10],
      'dim7': [0, 3, 6, 9],
      'add9': [0, 4, 7, 14],
      'madd9': [0, 3, 7, 14],
      'mmaj7': [0, 3, 7, 11],

      // extended chords
      '9': [0, 4, 7, 10, 14],
      'maj9': [0, 4, 7, 11, 14],
      'min9': [0, 3, 7, 10, 14],
      'm9': [0, 3, 7, 10, 14],

      '11': [0, 4, 7, 10, 14, 17],
      'maj11': [0, 4, 7, 11, 14, 17],
      'm11': [0, 3, 7, 11, 14, 17],
      'min11': [0, 4, 7, 11, 14, 17],

      '13': [0, 4, 7, 10, 14, 17, 21],
      'maj13': [0, 4, 7, 11, 14, 17, 21],
      'm13': [0, 3, 7, 11, 14, 17, 21],
      'min13': [0, 4, 7, 11, 14, 17, 21],
    };

    chordName = chordName?.trim();
    const bassNote = chordName?.split('/')?.[1];
    if (bassNote) chordName = chordName?.split('/')?.[0];

    if (!chordName || chordName === '') return [];

    if (chordName.startsWith("Bb")) chordName = chordName.replace('Bb', 'A#');
    if (chordName.startsWith("Db")) chordName = chordName.replace('Db', 'C#');
    if (chordName.startsWith("Eb")) chordName = chordName.replace('Eb', 'D#');
    if (chordName.startsWith("Gb")) chordName = chordName.replace('Gb', 'F#');
    if (chordName.startsWith("Ab")) chordName = chordName.replace('Ab', 'G#');

    /* 
      Split the chord into root note and chord type either at a space 
      or immediately after the flat/sharp notation.
      Otherwise just split after first character.
    */
    let splitIdx = 0;
    if (chordName.includes(' ')) splitIdx = chordName.indexOf(' ');
    if (chordName?.[1] === '#' || chordName?.[1] === 'b') splitIdx = 1;

    const rootNote = chordName.substring(0, splitIdx + 1)?.trim();
    const chordType = chordName.substring(splitIdx + 1)?.trim();

    /* If no chord type found, return */
    if (!Object.keys(chordStructures).includes(chordType)) return [];

    const rootNoteIdx: number = notes?.indexOf(rootNote);
    const chordNotes: string[] = [];

    /* 
      If a bass note is added and the first instance of the bass note
      is after the first instance of the root note, then shift the chord
      diagram up 12 half-steps.
    */
    let addIdx = 0;
    if (
      notes.indexOf(bassNote) > -1
      && notes.indexOf(bassNote) > rootNoteIdx
    ) addIdx = 12;

    const chordStructure = chordStructures[chordType];
    chordStructure?.forEach((n: number) => {
      chordNotes.push(notes[rootNoteIdx + n + addIdx])
    });

    if (bassNote && notes.indexOf(bassNote) > -1) {
      chordNotes.push(bassNote);
    }

    return chordNotes;
  }

  return (
    <div>
      <Piano notes={getChordNotes(chord)} />
    </div>
  )
}

export default Chord