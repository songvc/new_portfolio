import React, { Component } from 'react';
import { Flexbox, FlexItem } from 'flexbox-react';

class Header extends Component {
  render() {
    return (
      <Flexbox>
        <FlexItem>
          a
        </FlexItem>
        <FlexItem>
          b
        </FlexItem>
        <FlexItem>
          c
        </FlexItem>
        <FlexItem>
          d
        </FlexItem>
      </Flexbox>
    )
  }
}

export default Header;
