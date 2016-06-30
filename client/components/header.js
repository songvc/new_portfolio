import React, { Component } from 'react';
import ToggleMenu from './ToggleMenu';
import MenuLink from './MenuLink';
import { Flexbox, FlexItem } from 'flexbox-react';

const flexbox = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100',
    height: '60px'
  },
  flexIcon: {
    flex: '1'
  },
  flexCenter: {
    flex: '1',
  },
  flexMenus: {
    flex: '1'
  }
}

const layout = {

}

const style = {
  "backgroundColor": "#3a4145"
}

class Header extends Component {
  render() {
    return (
      <Flexbox style={Object.assign(layout, style)} {...flexbox.container}>
        <FlexItem onClick={this.props.toggleMenu} {...flexbox.flexItem}>
          <ToggleMenu />
        </FlexItem>
        <FlexItem  {...flexbox.flexItem}>

        </FlexItem>
        <FlexItem  {...flexbox.flexItem}>

        </FlexItem>
        <FlexItem  {...flexbox.flexItem}>

        </FlexItem>
      </Flexbox>
    )
  }
}

export default Header;
