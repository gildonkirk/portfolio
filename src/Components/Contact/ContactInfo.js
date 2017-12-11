import React, { Component } from 'react';

class ContactInfo extends Component {
  render() {
    return (
      <div className="row contactImageRow">
        <div className="col-4 contactInfoItem">
          <a href="mailto:gildonkirk@gmail.com">
            <i className="contactImage fa fa-paper-plane fa-3x" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-4 contactInfoItem">
          <a href="https://github.com/gildonkirk" target="_blank">
            <img className="contactImage githubImage" src={require('../../assets/github.png')}></img>
          </a>
        </div>
        <div className="col-4 contactInfoItem">
          <a href="https://www.linkedin.com/in/gildon-kirk/" target="_blank">
            <img className="contactImage linkedInImage" src={require('../../assets/linkedIn.png')}></img>
          </a>
        </div>
      </div>
    )
  };
}

export default ContactInfo;
