import React, { Component } from 'react';
import NavLeft from './NavLeft';
import NavRight from './NavRight';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-light justify-content-between navContainer">
        <NavLeft />
        <NavRight />
      </nav>
    );
  };
}

export default Nav;
