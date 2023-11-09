import logo from './logo.svg';
import './App.css';
import HeroSections  from './Components/HeroSections';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <HeroSections />
      </Container>
      
    </div>
  );
}

export default App;
