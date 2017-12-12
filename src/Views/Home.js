import React, { Component } from 'react';
import HomeHeader from '../Components/Home/HomeHeader';
import Tagline from '../Components/Home/Tagline';

class Home extends Component {
  render() {
    return (
      <div className="container contentContainer pageBody">
        <div className="row pageBodyRow" id="home">
          <div className="col-12 align-self-center pageBodyCol">
            <HomeHeader />
            <Tagline />
          </div>
        </div>
      </div>
    )
  };
}

export default Home;
