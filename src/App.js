import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import NavItems from './component/atoms/NavItems';
import NavBar from './component/molecules/NavBar';
import Footer from './component/molecules/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

