import React, { Component } from 'react';

class PortfolioGrid extends Component {
  render() {
    return (
      <div className="outer" id="scroll">
        <div className="float-wrap">
          <img className='img-fluid img-hover left-floater' src={require("../../assets/music.jpg")} alt=""/>
          <img className='img-fluid img-hover left-floater' src={require("../../assets/got.jpg")} alt=""/>
          <img className='img-fluid img-hover left-floater' src={require("../../assets/gif.jpg")} alt=""/>
          <img className='img-fluid img-hover left-floater' src={require("../../assets/starwars.jpg")} alt=""/>
        </div>
      </div>
    )
  };
}

export default PortfolioGrid;
