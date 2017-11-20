import React, { Component } from 'react';
import PageHeader from '../Components/MultiUse/PageHeader';
import AboutBody from '../Components/About/AboutBody';

class About extends Component {
  render() {
    return (
      <div className="container contentContainer pageBody">
        <div className="row pageBodyRow">
          <div className="col-12 align-self-center pageBodyCol">
            <PageHeader />
            <AboutBody />
          </div>
        </div>
      </div>
    )
  };
}

export default About;
