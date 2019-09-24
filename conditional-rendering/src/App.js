import React from 'react';
import logo from './logo.svg';
import './App.css';
import './'

function App() {

const music = ['rock', 'house', 'country']
  return (
    <div className="App">
      <p id="p1">Hello, i'm blue</p>
      <p id="p2">Hello, i'm red</p>
      <FaveMusic music={music}/>
    </div>
  );
}

export default App;
