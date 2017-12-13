import React, { Component } from 'react';
import HomeHeader from '../Components/Home/HomeHeader';
import Tagline from '../Components/Home/Tagline';
import homeBackground from '../assets/concrete-texture.png';

let backgroundStyle = {
  width: '100%',
  backgroundImage: `url(${homeBackground})`
};

class Home extends Component {
  render() {
    return (
      <div className="homeContainer" style={backgroundStyle}>
        <div className="container contentContainer pageBody ">
          <div className="row pageBodyRow" id="home">
            <div className="col-12 align-self-center pageBodyCol">
              <HomeHeader />
              <Tagline />
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default Home;
