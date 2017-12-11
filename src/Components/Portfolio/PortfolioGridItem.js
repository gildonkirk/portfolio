import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="img-link">
        <img className='img-fluid img-hover left-floater' src={require(this.props.source)} alt=""/>
        <a href={this.props.reference} target="_blank" rel="noopener noreferrer">
          <div className="opaque"></div>
        </a>
        <a href={this.props.reference} target="_blank" rel="noopener noreferrer">
          <div className="opaque-label">
            {this.props.name}
          </div>
        </a>
      </div>
    )
  };
}

export default Contact;
