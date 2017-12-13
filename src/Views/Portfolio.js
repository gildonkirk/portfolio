import React, { Component } from 'react';
import PageHeader from '../Components/MultiUse/PageHeader';
import PortfolioGrid from '../Components/Portfolio/PortfolioGrid';

class Portfolio extends Component {
  render() {
    return (
      <div className="container contentContainer pageBody portfolioContainer">
        <div className="row pageBodyRow" id="portfolio">
          <div className="col-12 align-self-center pageBodyCol">
            <PageHeader pageName='Portfolio' />
            <PortfolioGrid />
          </div>
        </div>
      </div>
    )
  };
}

export default Portfolio;
