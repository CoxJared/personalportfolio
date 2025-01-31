import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import Aerodynamics from './components/ProjectPage/Aerodynamics';
import WiringHarness from './components/ProjectPage/WiringHarness';
import FrontWing from './components/ProjectPage/FrontWing';
import AccumulatorAssembly from './components/ProjectPage/AccumulatorAssembly';

function App() {
  return (
    <Router>
      <link href="https://fonts.googleapis.com/css?family=Rajdhani:520,600|Ubuntu&display=swap" rel="stylesheet"/>
      <div className="app">
        <Route exact path="/"
          component={HomePage}/>  
        <Route path="/aerodynamics" 
          component={Aerodynamics} />
        <Route path="/wiringharness" 
          component={WiringHarness} />
        <Route path="/frontwing" 
          component={FrontWing} />
          <Route path="/accumulatorassembly" 
          component={AccumulatorAssembly} />
      </div>
    </Router>
  );
}

export default App;
