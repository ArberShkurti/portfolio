
import './App.scss';
import HeroSections from './Components/HeroSections';
import { Col, Container, Row } from 'react-bootstrap';
import Headerr from './Components/Headerr';
import MenuOverlay from './Components/MenuOverlay';
import { useState } from 'react';
import ImagesCollections from './Components/ImagesCollections';
import InformationSection from './Components/InformationSection';
import ContactForm from './ContactForm';
import FooterMenu from './Components/FooterMenu';
import React from 'react';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="App">
      <Container>
        <Headerr navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <HeroSections />
        <InformationSection />
        <ImagesCollections />
        <Container className='footer-section'>
          <Row>
            <Col>
            <div className='ikona'>
            </div>
            </Col>
          </Row>
          <Row className='my-3'>
            <Col>
            <ContactForm />
            <FooterMenu />
            </Col>
          </Row>
        </Container>
      </Container>
      
    </div>
  );
}

export default App;






// import './App.scss';
// import HeroSections from './Components/HeroSections';
// import { Container } from 'react-bootstrap';
// import Headerr from './Components/Headerr';
// import MenuOverlay from './Components/MenuOverlay';
// import { useState } from 'react';
// import ImagesCollections from './Components/ImagesCollections';
// import React from 'react';

// function App() {
//   const [navbarOpen, setNavbarOpen] = useState(false);
//   return (
//     <div className="App">
//       <Container>
//         <Headerr navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
//         <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
//         <HeroSections />
//         <ImagesCollections />
//       </Container>
      
//     </div>
//   );
// }


// export default App;
