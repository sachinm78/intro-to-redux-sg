import React, { Component } from 'react';
import Navbar from './Navbar'
import Todos from './Todos'
import CompleteTodos from './CompleteTodos'
import './App.css';
import IncompleteTodos from './IncompleteTodos';


class App extends Component {
 render(){   
  return(
    <div className="App">
      <Navbar />
      <h2>These Todos are Complete:</h2>
      <CompleteTodos />
      <h2>These Todos are incomplete:</h2>
      <IncompleteTodos />
    </div>
  )  
 }
}

export default App;
