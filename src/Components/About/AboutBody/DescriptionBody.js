import React, { Component } from 'react';
import DescriptionHeader from './DescriptionHeader';
import Description from './Description';


class DescriptionBody extends Component {
  render() {
    return (
      <div className="col-9">
        <DescriptionHeader />
        <Description />
      </div>
    )
  };
}

export default DescriptionBody;
