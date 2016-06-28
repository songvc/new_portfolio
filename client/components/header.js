import React, { Component } from 'react';
import ToggleMenu from './ToggleMenu';
import MenuLink from './MenuLink';
import { Flexbox, FlexItem } from 'flexbox-react';

const layout = {
  "flexBox": {
    "display": "flex",
    "flexDirection": "row",
    "width": "100%",
    "height": "60px"
  },
  "flexIcon": {
    "flex": "1"
  },
  "flexCenter": {
    "flex": "1",

  },
  "flexMenus": {
    "flex": "1"
  }
}

const style = {
  "border": "black solid 1px",
  "backgroundColor": "#3a4145"
}

class Header extends Component {
  render() {
    return (
      <Flexbox style={style} {...layout.flexBox}>
        <FlexItem style={style} {...layout.flexItem}>
          <ToggleMenu />
        </FlexItem>
        <FlexItem style={style} {...layout.flexItem}>

        </FlexItem>
        <FlexItem style={style} {...layout.flexItem}>

        </FlexItem>
        <FlexItem style={style} {...layout.flexItem}>

        </FlexItem>
      </Flexbox>
    )
  }
}

export default Header;
