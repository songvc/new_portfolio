import React, { Component } from 'react';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import Header from '../Header';
import VerticalMenu from '../VerticalMenu';

const style = {
  "marginTop": "120px"
}

class Blog extends Component {
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
          <p>sdf</p>

        </OffCanvasBody>
        <OffCanvasMenu>
          <VerticalMenu />
        </OffCanvasMenu>
      </OffCanvas>
    );
  }
}

export default Blog;
