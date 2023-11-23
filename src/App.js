import './App.scss';
import HeroSections from './Components/HeroSections';
import { Container } from 'react-bootstrap';
import Headerr from './Components/Headerr';
import MenuOverlay from './Components/MenuOverlay';
import { useState } from 'react';
import ImagesCollections from './Components/ImagesCollections';
import React from 'react';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="App">
      <Container>
        <Headerr navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        {/* <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} /> */}
        <HeroSections />
        <ImagesCollections />
      </Container>
      
    </div>
  );
}

export default App;
