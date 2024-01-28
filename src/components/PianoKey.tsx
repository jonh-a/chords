import React from 'react';

interface Props {
  note: string
  isHighlighted: boolean
  isBlackKey: boolean
  selectedNotes: string[]
  setSelectedNotes: React.Dispatch<React.SetStateAction<string[]>>
  setSearchBy: (searchBy: string) => void
  searchBy: string
}

const PianoKey: React.FC<Props> = ({
  note,
  isHighlighted,
  isBlackKey,
  selectedNotes,
  setSelectedNotes,
  setSearchBy,
  searchBy,
}) => {
  const handleDivClick = () => {
    setSearchBy('notes')
    setSelectedNotes((prevState: string[]) =>
      prevState?.includes(note)
        ? prevState?.filter((n: string) => n !== note)
        : [...prevState, note])
  }

  const className = searchBy === 'name'
    ? `piano-key ${isHighlighted ? 'highlighted' : ''} ${isBlackKey ? 'black-key' : ''}`
    : `piano-key ${selectedNotes?.includes(note) ? 'highlighted' : ''} ${isBlackKey ? 'black-key' : ''}`

  return (
    <div
      className={className}
      onClick={handleDivClick}
    >
      {
        (note?.endsWith('2') || note?.endsWith('3') || note?.endsWith('4'))
          ? note?.substring(0, note.length - 1)
          : note
      }
    </div>
  )
};

export default PianoKey;