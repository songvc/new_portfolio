import React, { Component } from 'react';
import { Link } from 'react-router';

const divStyle = {
  "backgroundColor": "blue",
  "flex": "1 50%",
  "height": "100%"
}

const linkStyle = {

}

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

    return (
      <div
        style={divStyle}
        onClick={this.handleClick.bind(this)}
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseOut={this.handleMouseOut.bind(this)}>
        <Link to={this.props.path}>{this.props.name}</Link>
      </div>
    )
  }
}


export default divLink;
