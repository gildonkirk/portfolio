import React, { Component } from 'react';
import PageHeader from '../Components/MultiUse/PageHeader';
import ContactInfo from '../Components/Contact/ContactInfo';

class Contact extends Component {
  render() {
    return (
      <div className="container contentContainer pageBody contactContainer">
        <div className="row pageBodyRow" id="contact">
          <div className="col-12 align-self-center pageBodyCol">
            <PageHeader pageName="Contact"/>
            <ContactInfo />
          </div>
        </div>
      </div>
    )
  };
}

export default Contact;
