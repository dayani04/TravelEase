import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import NavItems from './component/atoms/NavItems';
import NavBar from './component/molecules/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      
    </div>
  );
}

export default App;

