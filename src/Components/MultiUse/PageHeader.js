import React, { Component } from 'react';

class PageHeader extends Component {
  render() {
    return (
        <h1 className="pageHeader">{this.props.pageName}</h1>
    )
  };
}

export default PageHeader;
