import './App.css';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Explore from './components/Explore.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <BrowserRouter>


      <>
        <Nav />
        <Routes>


          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />


        
        
        </Routes>
        <Footer />
     


      </>

    </BrowserRouter>

  );
}

export default App;
