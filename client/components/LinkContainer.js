import React, { Component } from 'react';

class LinkContainer extends Component {

  render() {

    const styles = {
      "default": {
        "display": "flex",
        "flexDirection": "row",
        "flexWrap": "wrap"
      }
    }


    return (
      <div style={styles.default}>{this.props.children}</div>
    )
  }
}

export default LinkContainer;
