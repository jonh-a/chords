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
    ]

    const chordStructures: { [index: string]: number[] } = {
      'maj': [0, 4, 7],
      '': [0, 4, 7],
      'min': [0, 3, 7],
      'm': [0, 3, 7],
      '5': [0, 7],
      '7': [0, 4, 7, 10],
      'sus2': [0, 2, 7],
      'sus4': [0, 5, 7],
      '6': [0, 4, 7, 9],
      'maj7': [0, 4, 7, 11],
      'min7': [0, 3, 7, 10],
      'maj9': [0, 4, 7, 11, 14],
      'min9': [0, 3, 7, 10, 14],
      'add9': [0, 4, 7, 14],
      'madd9': [0, 3, 7, 14],
      'mmaj7': [0, 3, 7, 11],
      'dim': [0, 3, 6],
      'dim7': [0, 3, 6, 9],
    }

    if (chordName.startsWith("Bb")) chordName = chordName.replace('Bb', 'A#')
    if (chordName.startsWith("Db")) chordName = chordName.replace('Db', 'C#')
    if (chordName.startsWith("Eb")) chordName = chordName.replace('Eb', 'D#')
    if (chordName.startsWith("Gb")) chordName = chordName.replace('Gb', 'F#')
    if (chordName.startsWith("Ab")) chordName = chordName.replace('Ab', 'G#')

    let splitIdx = 0;
    if (chordName.includes(' ')) splitIdx = chordName.indexOf(' ');
    if (chordName?.[1] === '#' || chordName?.[1] === 'b') splitIdx = 1;

    const rootNote = chordName.substring(0, splitIdx + 1);
    const chordType = chordName.substring(splitIdx + 1)

    if (!Object.keys(chordStructures).includes(chordType)) {
      return []
    }

    const rootNoteIdx: number = notes?.indexOf(rootNote)
    const chordNotes: string[] = []
    const chordStructure = chordStructures[chordType];
    chordStructure?.forEach((n: number) => {
      chordNotes.push(notes[rootNoteIdx + n])
    })

    return chordNotes;
  }

  return (
    <div>
      <Piano notes={getChordNotes(chord)} />
    </div>
  )
}

export default Chord