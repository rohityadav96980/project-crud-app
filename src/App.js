import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <h2>Crud app</h2>
      <Routes>
        <Route path='/' element = {<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
