
import './App.css';
import Login from './pages/Login';

import Register from './pages/Register';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile'


function App() {


  
  return (
    <BrowserRouter> 
    
    <Routes> 

   <Route path='/' element={<Profile />}></Route>
   <Route exact path ='/login' element={<Login />}></Route>
   <Route path='/register' element={<Register />}></Route>
   <Route path = '/homepage' element={<Homepage />}></Route>
   <Route path = '/profile' element={<Profile />}></Route>



    </Routes>
    
    
    
    
    </BrowserRouter>
  );
}

export default App;
