export const notes = [
  'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',
  'A2', 'A#2', 'B2', 'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2',
  'A3', 'A#3', 'B3', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A4',
];

export const stripNumbersFromNotes = (notes: string[]): string[] => {
  return notes.map((note: string) => note.replace(/[0-9]/g, ''))
}

export const addNumbersToNotes = (rawNotes: string[]): string[] => {
  const baseNotes = notes.map(n => n.replace(/[0-9]/g, ''));

  let currentIndex = 0;
  const result: string[] = [];

  for (let note of rawNotes) {
    while (currentIndex < notes.length) {
      if (baseNotes[currentIndex] === note) {
        result.push(notes[currentIndex]);
        currentIndex++;
        break;
      }
      currentIndex++;
    }
  }

  return result;
}

export const orderNotesByPosition = (unsortedNotes: string[]): string[] => {
  return unsortedNotes.sort((a: string, b: string) => notes.indexOf(a) > notes.indexOf(b) ? 1 : -1)
}

export const chordStructures: { [index: string]: number[] } = {
  // triads
  'maj': [0, 4, 7],
  '(b5)': [0, 4, 6],
  '': [0, 4, 7],
  'min': [0, 3, 7],
  'm': [0, 3, 7],
  '5': [0, 7],
  'sus2': [0, 2, 7],
  'sus4': [0, 5, 7],
  'dim': [0, 3, 6],
  'aug': [0, 4, 8],
  '+': [0, 4, 8],

  // tetrads
  '6': [0, 4, 7, 9],
  'm6': [0, 3, 7, 9],
  'min6': [0, 3, 7, 9],
  '7': [0, 4, 7, 10],
  '7sus2': [0, 2, 7, 10],
  '7sus4': [0, 5, 7, 10],
  'maj7': [0, 4, 7, 11],
  'maj7sus2': [0, 2, 7, 11],
  'maj7sus4': [0, 5, 7, 11],
  'min7': [0, 3, 7, 10],
  'm7': [0, 3, 7, 10],
  'm7b5': [0, 3, 6, 10],
  'min7b5': [0, 3, 6, 10],
  'dim7': [0, 3, 6, 9],
  'add9': [0, 4, 7, 14],
  'addb9': [0, 4, 7, 13],
  '(add9)': [0, 4, 7, 14],
  '(addb9)': [0, 4, 7, 13],
  'madd9': [0, 3, 7, 14],
  'm(add9)': [0, 3, 7, 14],
  'mmaj7': [0, 3, 7, 11],

  // extended chords
  '6/9': [0, 4, 7, 9, 14],
  'm6/9': [0, 3, 7, 9, 14],
  'min6/9': [0, 3, 7, 9, 14],

  '9': [0, 4, 7, 10, 14],
  '9sus4': [0, 5, 7, 10, 14],
  'maj9': [0, 4, 7, 11, 14],
  'min9': [0, 3, 7, 10, 14],
  'm9': [0, 3, 7, 10, 14],

  '11': [0, 4, 7, 10, 14, 17],
  'maj11': [0, 4, 7, 11, 14, 17],
  'm11': [0, 3, 7, 11, 14, 17],
  'min11': [0, 4, 7, 11, 14, 17],
  'maj7#11': [0, 4, 7, 11, 18],

  '13': [0, 4, 7, 10, 14, 17, 21],
  '13sus4': [0, 5, 7, 10, 14, 17, 21],
  'maj13': [0, 4, 7, 11, 14, 17, 21],
  'm13': [0, 3, 7, 11, 14, 17, 21],
  'min13': [0, 4, 7, 11, 14, 17, 21],
};

export const swapFlatsWithSharps = (str: string) => {
  if (str?.startsWith("Bb")) return str.replace('Bb', 'A#');
  if (str?.startsWith("Db")) return str.replace('Db', 'C#');
  if (str?.startsWith("Eb")) return str.replace('Eb', 'D#');
  if (str?.startsWith("Gb")) return str.replace('Gb', 'F#');
  if (str?.startsWith("Ab")) return str.replace('Ab', 'G#');
  return str
}

export const isSlashChord = (chord: string): boolean => {
  return (!chord?.endsWith('9') && chord?.includes('/'));
}

