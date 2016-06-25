import React, { Component } from 'react';
import { Flexbox, FlexItem } from 'flexbox-react';

const style = {
  "base": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "width": "100%",
    "height": "10%"
  },
  "flexItem": {
    "flex": "1",
    "width": "20px",
    "height": "20px",
    "backgroundColor": "red"
  },
  "flexItem-2": {
    "flex": "2"
  },
  "color": {
    "backgroundColor":"red"
  }
}

class Header extends Component {
  render() {
    return (
      <Flexbox style={style.base}>
        <FlexItem style={Object.assign({}, style.flexItem)}>
          a
        </FlexItem>
        <FlexItem style={Object.assign({}, style.flexItem)}>
          b
        </FlexItem>
        <FlexItem style={Object.assign({}, style.flexItem)}>
          c
        </FlexItem>
        <FlexItem style={Object.assign({}, style.flexItem)}>
          d
        </FlexItem>
      </Flexbox>
    )
  }
}

export default Header;
