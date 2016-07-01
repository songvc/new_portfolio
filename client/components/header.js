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

  constructor(props){
    super(props);
  }

  render() {
    const {leftMenu, rightMenu} = this.props;

    return (
      <Flexbox style={style} {...dimension.flexBox}>
        <FlexItem onClick={this.props.toggleAction} {...dimension.flexItem.icon}>
          <ToggleMenu />
        </FlexItem>
        <FlexItem  {...dimension.flexItem.center}>
        </FlexItem>
        <FlexItem  {...dimension.flexItem.menu}>
          <MenuLink message={{path:`/${leftMenu}`}}>{leftMenu}</MenuLink>
        </FlexItem>
        <FlexItem  {...dimension.flexItem.menu}>
          <MenuLink message={{path:`/${rightMenu}`}}>{rightMenu}</MenuLink>
        </FlexItem>
      </Flexbox>
    )
  }
}

export default Header;
