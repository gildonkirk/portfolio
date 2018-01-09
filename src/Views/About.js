import React, { Component } from 'react';
import PageHeader from '../Components/MultiUse/PageHeader';
import AboutBody from '../Components/About/AboutBody';
import aboutBackground from '../assets/dark_wall_light.png';

let backgroundStyle = {
  width: '100%',
  backgroundImage: `url(${aboutBackground})`
};

class About extends Component {
  render() {
    return (
      <div className="aboutContainer" style={backgroundStyle}>
        <div className="container contentContainer pageBody">
          <div className="row pageBodyRow" id="about">
            <div className="col-12 align-self-center pageBodyCol">
              <PageHeader pageName='About' />
              <AboutBody />
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default About;
