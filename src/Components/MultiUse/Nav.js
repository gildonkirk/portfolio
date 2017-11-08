import React, { Component } from 'react';
import NavLeft from './NavLeft';
import NavRight from './NavRight';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLeft />
        <NavRight />
      </nav>
    );
  };
}

export default Nav;
