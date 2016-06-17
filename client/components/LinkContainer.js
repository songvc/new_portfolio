import React, { Component } from 'react';

class LinkContainer extends Component {

  render() {

    const flexbox = {
      "display": "flex",
      "flexDirection":"row",
      "flexWrap": "wrap"
    }

    if (this.props.customProp) {
      const flexProp = this.props.customProp;
      flexbox["flex"] = flexProp;
    }

    const height = this.props.height;
    flexbox["height"] = height;

    return (
      <div style={flexbox}>{this.props.children}</div>
    )
  }
}

export default LinkContainer;
