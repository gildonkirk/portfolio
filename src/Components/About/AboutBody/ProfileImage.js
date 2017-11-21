import React, { Component } from 'react';

class ProfileImage extends Component {
  render() {
    return (
      <div className="col-3">
        <img className='img-fluid profilePicture' src={require("../../../assets/profile_picture.JPG")} alt=""/>
      </div>
    )
  };
}

export default ProfileImage;
