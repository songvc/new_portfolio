import React, { Component } from 'react';
import Header from '../Header';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import VerticalMenu from '../VerticalMenu';

class Lab extends Component {
  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false
    })
  }

  handleClick() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }
  
  render() {
    return (
      <OffCanvas width={300} transitionDuration={300} isMenuOpened={this.state.isMenuOpened} position={"left"}>
        <OffCanvasBody>
          <Header />
          <p><a href="#" onClick={this.handleClick.bind(this)}>Click here</a> to toggle the menu.</p>
        </OffCanvasBody>
        <OffCanvasMenu>
          <VerticalMenu />
        </OffCanvasMenu>
      </OffCanvas>
    )
  }
}

export default Lab;
