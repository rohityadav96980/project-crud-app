import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { AddUser } from './pages/AddUser';
import { EditUser } from './pages/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path="/addUser" element = {<AddUser/>}/>
        <Route path = "/editUser/:id" element = {<EditUser/>} />
      </Routes> 
    </div>
  );
}

export default App;
