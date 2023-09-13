import { Router } from './Router/Router';
import NavBar from './components/NavBar/NavBar';
import './global.css';

function App() {

  return (
    <div className="App">
        <NavBar/>
        <Router/>
    </div>
  )
}

export default App;