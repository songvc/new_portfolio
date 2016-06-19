import React, { Component } from 'react';

const styles = {
  "default": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "height": "100%"
  }
}

class LinkContainer extends Component {

  render() {
    return (
      <div style={styles.default}>{this.props.children}</div>
    )
  }
}

export default LinkContainer;
