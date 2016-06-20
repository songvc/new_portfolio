import React, { Component } from 'react';
import Radium from 'radium';

const styles = {
  "default": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "non-nested": {
    "height": "100%"
  },
  "nested": {
    "flex": "1 50%",
    "height": "50%",
    "@media (max-Width: 540px)": {
      "flexDirection": "column",
      "height": "25%"
    }
  }
}

class LinkContainer extends Component {

  render() {
    return (
      <div style={[styles.default, styles[this.props.layout]]}>{this.props.children}</div>
    )
  }
}

export default Radium(LinkContainer);
