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

  toggleMenu() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }

  render() {
    return (
      <OffCanvas width={300} transitionDuration={300} isMenuOpened={this.state.isMenuOpened} position={"left"}>
        <OffCanvasBody>
          <Header toggleMenu={this.toggleMenu.bind(this)}/>
        </OffCanvasBody>
        <OffCanvasMenu>
          <VerticalMenu />
        </OffCanvasMenu>
      </OffCanvas>
    )
  }
}

export default Lab;
