import React, { Component } from 'react';
import { Flexbox, FlexItem } from 'flexbox-react';

const dimension = {
  flexBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '200px',
    alignItems: 'center',
    textAlign: 'center'
  },
  flexItem: {

  }
}

class Title extends Component {
  render() {
    return (
      <Flexbox {...dimension.flexBox}>
        <FlexItem>
          <h1>{this.props.children}</h1>
        </FlexItem>
      </Flexbox>
    )
  }
}

export default Title;
