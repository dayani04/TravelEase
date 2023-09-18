import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import NavItems from './component/atoms/NavItems';
import NavBar from './component/molecules/NavBar';
import Footer from './component/molecules/Footer';
import Location from './pages/Location';
import Hotel from './pages/Hotel';
import Transpotation from './pages/Transpotation';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Location" element={<Location/>}/>
        <Route path="/Hotel" element={<Hotel/>}/>
        <Route path="/Transpotation" element={<Transpotation/>} />   
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

