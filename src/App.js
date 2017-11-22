import React, { Component } from 'react';
import Nav from './Components/MultiUse/Nav';
import Home from './Views/Home';
import About from './Views/About';
import Portfolio from './Views/Portfolio';
import Contact from './Views/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="bodyContainer">
        <Nav />
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  };
}

export default App;
