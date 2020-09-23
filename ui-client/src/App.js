import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './components/Navbar';
import Routes from './routes/Routes';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;