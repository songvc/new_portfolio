import React, { Component } from 'react';
import { Flexbox, FlexItem } from 'flexbox-react';

const style = {
  "base": {
    "display": "flex",
    "flexDirection": "row",
    "width": "100%",
    "height": "10%"
  },
  "flexItem": {
    "flex": "1",
    "width": "200px",
    "height": "100%",
    "border": "1px solid black",
    "backgroundColor": "red"
  },
  "flexItem-2": {
    "flex": "2"
  }
}

class Header extends Component {
  render() {
    return (
      <Flexbox {...style.base}>
        <FlexItem {...style.flexItem}>
          
        </FlexItem>
        <FlexItem {...style.flexItem}>

        </FlexItem>
        <FlexItem {...style.flexItem}>

        </FlexItem>
        <FlexItem {...style.flexItem}>

        </FlexItem>
      </Flexbox>
    )
  }
}

export default Header;
