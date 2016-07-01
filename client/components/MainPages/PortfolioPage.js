import React, { Component } from 'react';
import PortfolioList from '../Portfolio/PortfolioList';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import VerticalMenu from '../VerticalMenu';
import Header from '../Header';

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

  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false
    })
  }

  toggleMenu() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }

  render() {
    return (
      <OffCanvas width={300} transitionDuration={300} isMenuOpened={this.state.isMenuOpened} position={"left"}>
        <OffCanvasBody style={{fontSize: '30px'}}>
          <Header toggleMenu={this.toggleMenu.bind(this)}/>
          <PortfolioList portfolios={portfolioData}/>
        </OffCanvasBody>
        <OffCanvasMenu>
          <VerticalMenu />
        </OffCanvasMenu>
      </OffCanvas>
    );
  }
}

export default Portfolio;
