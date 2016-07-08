import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './Header';
import MenuLink from './MenuLink';
import SpinMenu from './SpinMenu';
import VMenu from './VMenu';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';

class Layout extends Component {

  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false
    });
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }

  getMenus(page) {
    // render different headers depending on pages
    // blog -> lab, portfolio
    // lab  -> portfolio, blog
    // portfolio -> blog, lab
    switch(page) {
      case '/blog':
        return ['lab', 'portfolio'];
      case '/lab':
        return ['blog', 'portfolio'];
      case '/portfolio':
        return ['blog', 'lab'];
    }
  }

  render() {
    const { pathname } = this.props.location;
    const [ leftMenu, rightMenu ] = this.getMenus(pathname);


    return (
      <OffCanvas width={300} transitionDuration={300} isMenuOpened={this.state.isMenuOpened} position={'left'}>
        <OffCanvasBody style={{fontSize: '30px'}}>
          <Header toggleMenu={this.toggleMenu} leftMenu={leftMenu} rightMenu={rightMenu} />
          {this.props.children}
        </OffCanvasBody>
        <OffCanvasMenu>
          <VMenu />
        </OffCanvasMenu>
      </OffCanvas>
    );
  }
}

export default Layout;
