import { useState, useEffect } from 'react';
import Form from './components/Form';
import Chord from './components/Chord';
import Container from '@mui/material/Container'

const App = () => {
  const [chord, setChord] = useState<string>('Cmaj7/G');
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      <Form
        chord={chord}
        setChord={setChord}
      />
      <Chord
        chord={chord}
        mobile={isMobile}
      />
    </Container>
  )
}

export default App