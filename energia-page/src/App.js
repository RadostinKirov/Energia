import './App.css';
import { Routes, Route } from 'react-router-dom';



import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Activities from './components/Activities/Activities';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
