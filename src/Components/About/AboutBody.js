import React, { Component } from 'react';
import ProfileImage from './AboutBody/ProfileImage';
import DescriptionBody from './AboutBody/DescriptionBody';

class AboutBody extends Component {
  render() {
    return (
      <div className="row">
        <ProfileImage />
        <DescriptionBody />
      </div>
    )
  };
}

export default AboutBody;
