import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/menu/menu.jsx';

function App() {
  return (
    <div className="App">
      {/* Votre navigation ou layout commun ici */}
      <Outlet />
    </div>
  );
}

export default App;