import React, { Component } from 'react';

class NavRight extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav-item active">
          <a className="nav-link navText" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link navText" href="/">Link</a>
        </li>
      </ul>
    );
  };
}

export default NavRight;
