import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';


function App() {
  return (
    <BrowserRouter> 
    
    <Routes> 

   <Route path='/' element={<Login />}></Route>
   <Route path = '/login' element={<Login />}></Route>
   <Route path='/register' element={<Register />}></Route>
   <Route path = '/homepage' element={<Homepage />}></Route>



    </Routes>
    
    
    
    
    </BrowserRouter>
  );
}

export default App;
