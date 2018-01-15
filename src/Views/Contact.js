import React, { Component } from 'react';
import PageHeader from '../Components/MultiUse/PageHeader';
import ContactInfo from '../Components/Contact/ContactInfo';
import portfolioBackground from '../assets/dark_wall_light.png';

let backgroundStyle = {
  width: '100%',
  backgroundImage: `url(${portfolioBackground})`
};

class Contact extends Component {
  render() {
    return (
      <div className="contactContainer" style={backgroundStyle}>
        <div className="container contentContainer pageBody">
          <div className="row pageBodyRow" id="contact">
            <div className="col-12 align-self-center pageBodyCol">
              <PageHeader className="contactPageHeader" pageName="Contact"/>
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default Contact;
