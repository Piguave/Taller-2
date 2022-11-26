import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Imc from './components/Imc';
import Age from './components/Age';
import Clock from './components/Clock';
import About from './components/About';
import Contact from './components/Contact';
import Nav_B from './components/Nav';
import Footer from './components/Footer';
function App() {
  return (
   <>
    <Router>
      <div className="App">
        <Nav_B />
        <Routes>
          <Route exact path="/components/Home" element={<Home/>} />
          <Route exact path="/components/Imc" element ={<Imc/>} />
          <Route exact path="/components/Age" element ={<Age/>} />
          <Route exact path="/components/Clock" element={<Clock/>} />
          <Route exact path="/components/About" element ={<About/>} />
          <Route exact path="/components/Contact" element ={<Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>

   </>
  );
}

export default App;
