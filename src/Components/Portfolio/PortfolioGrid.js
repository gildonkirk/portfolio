import React, { Component } from 'react';

class PortfolioGrid extends Component {
  render() {
    return (
      <div className="outer" id="scroll">
        <div className="float-wrap">
          <div className="img-link">
            <img className='img-fluid img-hover left-floater' src={require("../../assets/music.jpg")} alt=""/>
            <a href="https://github.com/kyscott/Music-To-Date" target="_blank">
              <div className="opaque"></div>
            </a>
            <a href="https://github.com/kyscott/Music-To-Date" target="_blank">
              <div className="opaque-label">
                Music to Date
              </div>
            </a>
          </div>
          <div className="img-link">
            <img className='img-fluid img-hover left-floater' src={require("../../assets/got.jpg")} alt=""/>
            <a href="https://gildonkirk.github.io/TriviaGame/" target="_blank">
              <div className="opaque">
              </div>
            </a>
            <a href="https://gildonkirk.github.io/TriviaGame/" target="_blank">
              <div className="opaque-label">
                GOT Trivia
              </div>
            </a>
          </div>
          <div className="img-link">
            <img className='img-fluid img-hover left-floater' src={require("../../assets/gif.jpg")} alt=""/>
            <a href="https://gildonkirk.github.io/gif-er-izer/" target="_blank">
              <div className="opaque">
              </div>
            </a>
            <a href="https://gildonkirk.github.io/gif-er-izer/" target="_blank">
              <div className="opaque-label">
                Gif-er-izer
              </div>
            </a>
          </div>
          <div className="img-link">
            <img className='img-fluid img-hover left-floater' src={require("../../assets/starwars.jpg")} alt=""/>
            <a href="https://gildonkirk.github.io/star-wars-tbs/" target="_blank">
              <div className="opaque">
              </div>
            </a>
            <a href="https://gildonkirk.github.io/star-wars-tbs/" target="_blank">
              <div className="opaque-label">
                Star Wars Game
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  };
}

export default PortfolioGrid;
