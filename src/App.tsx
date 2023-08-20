import { useState, useEffect } from 'react';
import Form from './components/Form';
import Chord from './components/Chord';
import Container from '@mui/material/Container'
import Help from './components/Help';

const App = () => {
  const [chord, setChord] = useState<string>('Cmaj7/G');
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 650);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [searchBy, setSearchBy] = useState<string>("name")

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 650);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      <Form
        chord={chord}
        setChord={setChord}
        setModalOpen={setModalOpen}
        searchBy={searchBy}
        setSearchBy={setSearchBy}
      />
      <Chord
        chord={chord}
        setChord={setChord}
        mobile={isMobile}
        searchBy={searchBy}
        setSearchBy={setSearchBy}
      />
      <Help
        open={modalOpen}
        setOpen={setModalOpen}
      />
    </Container>
  )
}

export default App