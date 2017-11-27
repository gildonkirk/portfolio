import React, { Component } from 'react';

class PortfolioGrid extends Component {
  render() {
    return (
      <div className="outer" id="scroll">
        <div className="float-wrap">
          <div className="img-link">
            <a href="https://github.com/kyscott/Music-To-Date" target="_blank">
              <img className='img-fluid img-hover left-floater' src={require("../../assets/music.jpg")} alt=""/>
            </a>
            <div className="opaque">
            </div>
            <div className="opaque-label">
              Music to Date
            </div>
          </div>
          <div className="img-link">
            <a href="https://gildonkirk.github.io/TriviaGame/" target="_blank">
              <img className='img-fluid img-hover left-floater' src={require("../../assets/got.jpg")} alt=""/>
            </a>
            <div className="opaque">
            </div>
            <div className="opaque-label">
              GOT Trivia
            </div>
          </div>
          <div className="img-link">
            <a href="https://gildonkirk.github.io/gif-er-izer/" target="_blank">
              <img className='img-fluid img-hover left-floater' src={require("../../assets/gif.jpg")} alt=""/>
            </a>
            <div className="opaque">
            </div>
            <div className="opaque-label">
              Gif-er-izer
            </div>
          </div>
          <div className="img-link">
            <a href="https://gildonkirk.github.io/star-wars-tbs/" target="_blank">
              <img className='img-fluid img-hover left-floater' src={require("../../assets/starwars.jpg")} alt=""/>
            </a>
            <div className="opaque">
            </div>
            <div className="opaque-label">
              Star Wars Game
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default PortfolioGrid;
