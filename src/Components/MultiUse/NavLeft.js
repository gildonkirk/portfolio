import React, { Component } from 'react';

class NavLeft extends Component {
  render() {
    return (
      <a className="navbar-brand" href="#home">
        <img src={require("../../assets/issaSquare.jpg")} width="30" height="30" alt="" />
      </a>
    );
  };
}

export default NavLeft;
