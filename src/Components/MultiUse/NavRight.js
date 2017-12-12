import React, { Component } from 'react';

class NavRight extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav-item active">
          <a className="nav-link navText" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navText" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navText" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navText" href="#contact">Contact</a>
        </li>
      </ul>
    );
  };
}

export default NavRight;
