import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import Register from './features/register/Register';
import Login from './features/login/Login';


function App() {
  return (
    <div className="App">
     
      <Register/>
      <Login/>
      
    </div>
  );
}

export default App;