import React, { Component } from 'react';
import { Link } from 'react-router';


class divLink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovering: false,
      isActive: false
    }
  }

  handleMouseOver() {
    this.setState({ isHovering: true });
  }

  handleMouseOut() {
    this.setState({ isHovering: false });
  }

  handleClick(event) {
    var active = !this.state.isActive;
    this.setState({ isActive: active });
  }

  render() {
    const divStyle = {
      "backgroundColor": "red",
      "flex": "1 50%"
    }

    const linkStyle = {

    }

    const height = this.props.height;
    divStyle["height"] = height;

    return (
      <div
        style={divStyle}
        onClick={this.handleClick.bind(this)}
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseOut={this.handleMouseOut.bind(this)}>
        <Link style={linkStyle} to={this.props.path}>{this.props.name}</Link>
      </div>
    )

  }
}


export default divLink;
