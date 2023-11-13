import './App.scss';
import HeroSections  from '../src/Components/HeroSections';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import { useState } from 'react';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="App">
      <Container>
        <header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <HeroSections />
      </Container>
      
    </div>
  );
}

export default App;
