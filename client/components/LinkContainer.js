import React, { Component } from 'react';

const flexbox = {
  "display": "flex",
  "flexDirection":"row",
  "flexWrap": "wrap",
  "height": "100%"
}

class LinkContainer extends Component {
  render() {
    return (
      <div style={flexbox}>{this.props.children}</div>      
    )
  }
}

export default LinkContainer
