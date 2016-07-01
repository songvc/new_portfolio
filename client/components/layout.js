import React, { Component } from 'react';
import Header from './Header';
import VerticalMenu from './VerticalMenu';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';

class Layout extends Component {

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

  getMenus(page) {
    //conditionally render different menus depends on pages
    // blog -> lab, portfolio
    // lab  -> portfolio, blog
    // portfolio -> blog, lab
    switch(page) {
      case 'blog':
        return ['lab', 'portfolio'];
      case 'lab':
        return ['portfolio', 'blog'];
      case 'portfolio':
        return ['blog', 'lab'];
    }
  }

  render() {

    const [leftMenu, rightMenu] = this.getMenus(this.props.page);

    return (
      <OffCanvas width={300} transitionDuration={300} isMenuOpened={this.state.isMenuOpened} position={'left'}>
        <OffCanvasBody style={{fontSize: '30px'}}>
          <Header toggleAction={this.toggleMenu.bind(this)} leftMenu={leftMenu} rightMenu={rightMenu}/>
          {this.props.children}
        </OffCanvasBody>
        <OffCanvasMenu>
          <VerticalMenu />
        </OffCanvasMenu>
      </OffCanvas>
    );
  }

}

export default Layout;
