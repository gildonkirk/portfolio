import React, { Component } from 'react';

class PortfolioGrid extends Component {
  render() {
    return (
      <div className="outer" id="scroll">
        <div className="float-wrap">
          <a href="https://github.com/kyscott/Music-To-Date" target="_blank"><img className='img-fluid img-hover left-floater' src={require("../../assets/music.jpg")} alt=""/></a>
          <a href="https://gildonkirk.github.io/TriviaGame/" target="_blank"><img className='img-fluid img-hover left-floater' src={require("../../assets/got.jpg")} alt=""/></a>
          <a href="https://gildonkirk.github.io/gif-er-izer/" target="_blank"><img className='img-fluid img-hover left-floater' src={require("../../assets/gif.jpg")} alt=""/></a>
          <a href="https://gildonkirk.github.io/star-wars-tbs/" target="_blank"><img className='img-fluid img-hover left-floater' src={require("../../assets/starwars.jpg")} alt=""/></a>
        </div>
      </div>
    )
  };
}

export default PortfolioGrid;
