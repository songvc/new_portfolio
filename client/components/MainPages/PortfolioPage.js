import React, { Component } from 'react';
import Layout from '../Layout';
import PortfolioList from '../Portfolio/PortfolioList';

const portfolioData = [
  {
    id: '1',
    name: 'hello',
    imgSrc: 'www.google.com',
    path: 'www.google.com',
    description: 'hello'
  },
  {
    id: '2',
    name: 'hello',
    imgSrc: 'www.google.com',
    path: 'www.google.com',
    description: 'hello'
  },
  {
    id: '3',
    name: 'hello',
    imgSrc: 'www.google.com',
    path: 'www.google.com',
    description: 'hello'
  }
];

class Portfolio extends Component {

  render() {
    return (
      <Layout page='portfolio'>
        <PortfolioList portfolios={portfolioData}/>
      </Layout>
    );
  }
}

export default Portfolio;
