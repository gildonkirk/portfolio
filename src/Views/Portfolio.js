import React, { Component } from 'react';
import PageHeader from '../Components/MultiUse/PageHeader';
import PortfolioGrid from '../Components/Portfolio/PortfolioGrid';
import portfolioBackground from '../assets/dark_wall.png';

let backgroundStyle = {
  width: '100%',
  backgroundImage: `url(${portfolioBackground})`
};

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolioContainer" style={backgroundStyle}>
        <div className="container contentContainer pageBody">
          <div className="row pageBodyRow" id="portfolio">
            <div className="col-12 align-self-center pageBodyCol">
              <PageHeader pageName='Portfolio' />
              <PortfolioGrid />
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default Portfolio;
