import './App.css';
import { Routes, Route } from 'react-router-dom';



import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Activities from './components/Activities/Activities';
import Contacts from './components/Contacts/Contacts';


function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Activities />
      <Contacts />
      <footer>
        <address className="animate__fadeIn" >
          <p className="animate__animated animate__bounceIn" >Copyright © www.energyeood.bg - Енергия ЕООД, гр.Казанлък - 2017</p>
        </address>
        <a href="">Изработка и дизайн от www.StudioKazanlak.com</a>
      </footer>

    </div>
  );
}

export default App;
