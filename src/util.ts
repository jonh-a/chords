export const notes = [
  'A', 'A#', 'B', 'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2',
  'A2', 'A#2', 'B2', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3',
  'A3', 'A#3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4',
];

export const stripNumbersFromNotes = (notes: string[]): string[] => {
  return notes.map((note: string) => note.replace(/[0-9]/g, ''))
}

export const addNumbersToNotes = (rawNotes: string[]): string[] => {
  const baseNotes = notes.map(n => n.replace(/[0-9]/g, ''));

  let currentIndex = 0;
  const result: string[] = [];
  const increaseOctave = baseNotes.indexOf(rawNotes[0]) < 6;

  for (let note of rawNotes) {
    while (currentIndex < notes.length) {
      if (baseNotes[currentIndex] === note) {
        result.push(notes[increaseOctave ? currentIndex + 12 : currentIndex]);
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