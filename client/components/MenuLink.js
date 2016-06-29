import React, { Component } from 'react';
import { browserHistory } from 'react-router';

const layout = {
  "height": "100%",
  "weight": "100%",
  "textAlign": "center"
}

// let style = {
//   "base": {
//     "backgroundColor": "Red"
//   },
//   "hover": {
//     "backgroundColor": "Red"
//   }
// }

class MenuLink extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHovering: false
    }
  }

  handleClick() {
    browserHistory.push(this.props.message.path);
  }

  handleHover() {
    this.setState({ isHovering: !this.state.isHovering })
  }

  render() {
    const { color } = this.props;

    return (
      <div
        style={layout}
        onMouseOver={this.handleHover.bind(this)}
        onMouseOut={this.handleHover.bind(this)}
        onClick={this.handleClick.bind(this)}>
        <p style={linkHover}>{this.props.children}</p>
      </div>
    );
  }
}

export default MenuLink;
