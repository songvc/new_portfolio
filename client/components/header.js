import React, { Component } from 'react';
import ToggleMenu from './ToggleMenu';
import MenuLink from './MenuLink';
import { Flexbox, FlexItem } from 'flexbox-react';

const dimension = {
  flexBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '60px',
    justifyContent: 'flex-start'
  },
  flexItem: {
    icon: {
      flex: '1',
    },
    center: {
      width: '100%'
    },
    menus: {
      flex: '1'
    }
  }
}

const style = {
  "backgroundColor": "#3a4145"
}

class Header extends Component {
  render() {
    return (

      <Flexbox style={style} {...dimension.flexBox}>

        <FlexItem onClick={this.props.toggleMenu} {...dimension.flexItem.icon}>
          <ToggleMenu />
        </FlexItem>

        <FlexItem  {...dimension.flexItem.center}>
        </FlexItem>

        <FlexItem  {...dimension.flexItem.menu}>
          <MenuLink message={{path:'/portfolio'}}>PORTFOLIO</MenuLink>
        </FlexItem>

        <FlexItem  {...dimension.flexItem.menu}>
          <MenuLink message={{path:'/lab'}}>LAB</MenuLink>
        </FlexItem>

      </Flexbox>
    )
  }
}

export default Header;
