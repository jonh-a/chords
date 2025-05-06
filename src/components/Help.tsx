import React from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getAllChordTypes } from 'parse-chord'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
}

const Help: React.FC<Props> = ({
  open,
  setOpen,
}) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 400,
    minWidth: '90%',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight: '50%',
    overflow: 'scroll',
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Chord Visualizer
        </Typography>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Enter the name of a chord to visualize it.

          <br />
          <br />

          The following chords are supported:

          <br />

          {
            getAllChordTypes()
              ?.filter((i: string) => i.length > 0)
              ?.join(" / ")
          }
        </Typography>
      </Box>
    </Modal>
  )
}

export default Help