import React, { Component } from 'react';
import PortfolioList from '../components/Portfolio/PortfolioList';

const portfolioData = [
  {
    id: '1',
    name: 'hello',
    imgSrc: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    path: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    description: 'Lorem ipsum dolor'
  },
  {
    id: '2',
    name: 'hello',
    imgSrc: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    path: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    description: 'hello'
  },
  {
    id: '3',
    name: 'hello',
    imgSrc: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    path: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    description: 'hello'
  },
  {
    id: '4',
    name: 'hello',
    imgSrc: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    path: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    description: 'hello'
  },
  {
    id: '5',
    name: 'hello',
    imgSrc: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    path: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    description: 'hello'
  },
  {
    id: '6',
    name: 'hello',
    imgSrc: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    path: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    description: 'hello'
  },
  {
    id: '7',
    name: 'hello',
    imgSrc: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    path: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    description: 'hello'
  },
  {
    id: '8',
    name: 'hello',
    imgSrc: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    path: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    description: 'hello'
  },
  {
    id: '9',
    name: 'hello',
    imgSrc: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    path: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    description: 'hello'
  },
  {
    id: '10',
    name: 'hello',
    imgSrc: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    path: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    description: 'hello'
  },
  {
    id: '11',
    name: 'hello',
    imgSrc: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    path: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    description: 'hello'
  },
  {
    id: '12',
    name: 'hello',
    imgSrc: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    path: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    description: 'hello'
  },
  {
    id: '13',
    name: 'hello',
    imgSrc: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    path: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    description: 'hello'
  },
  ,
  {
    id: '14',
    name: 'hello',
    imgSrc: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    path: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    description: 'hello'
  },
  {
    id: '15',
    name: 'hello',
    imgSrc: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    path: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    description: 'hello'
  }
];

class Portfolio extends Component {

  render() {
    return (
      <PortfolioList portfolios={portfolioData}/>
    );
  }
}

export default Portfolio;
