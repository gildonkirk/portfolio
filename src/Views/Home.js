import React, { Component } from 'react';
import HomeHeader from '../Components/Home/HomeHeader';
import Tagline from '../Components/Home/Tagline';

class Home extends Component {
  render() {
    return (
      <div className="container contentContainer pageBody">
        <HomeHeader />
        <Tagline />
      </div>
    )
  };
}

export default Home;
