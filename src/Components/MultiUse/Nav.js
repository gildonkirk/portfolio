import React, { Component } from 'react';
import NavLeft from './NavLeft';
import NavRight from './NavRight';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light justify-content-between">
        <NavLeft />
        <NavRight />
      </nav>
    );
  };
}

export default Nav;
