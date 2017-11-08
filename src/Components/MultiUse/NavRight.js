import React, { Component } from 'react';

class NavRight extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-right">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
}

export default NavRight;
