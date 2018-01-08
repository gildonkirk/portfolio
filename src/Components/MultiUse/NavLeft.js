import React, { Component } from 'react';

class NavLeft extends Component {
  render() {
    return (
      <div className="iconContainer">
        <a className="navbar-brand logoImg" href="#home">
          <img className="navImg" src={require("../../assets/treeThumbnail.png")} width="40" height="40" alt="" />
        </a>
        <a className="navbar-brand logoText" href="#home">
          <h1 className="navHeader">Gildon Kirk</h1>
          <p className="navHeadDescrip">Web Development / Design</p>
        </a>
      </div>
    );
  };
}

export default NavLeft;
