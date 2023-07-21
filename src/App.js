import React from 'react'
import './App.css';

import Edit from './Edit';
import Home from './Home';
import Users from './Users';
import View from './View';
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    
    <Route path='/users/add' element={<Users />} />
    <Route path='/users/edit/:id' element={<Edit/>} />
    <Route path='/users/:id' element={<View />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
