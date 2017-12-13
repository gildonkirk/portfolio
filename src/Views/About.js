import React, { Component } from 'react';
import PageHeader from '../Components/MultiUse/PageHeader';
import AboutBody from '../Components/About/AboutBody';

class About extends Component {
  render() {
    return (
      <div className="container contentContainer pageBody aboutContainer">
        <div className="row pageBodyRow" id="about">
          <div className="col-12 align-self-center pageBodyCol">
            <PageHeader pageName='About' />
            <AboutBody />
          </div>
        </div>
      </div>
    )
  };
}

export default About;
