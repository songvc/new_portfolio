import React, { Component } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

const styles = {
  divStyle: {
    "default": {
      "position":"relative",
      "border": "black 1px solid",
      "flex": "1 49%",
      "height": "50%"
    },
    "mediaQueries": {
      "@media (max-Width: 540px)":{
        "flex": '1 100%'
      }
    }
  },
  linkStyle: {
    "default": {
      "position":"absolute",
      "height": "100px",
      "weight": "100px",
    },
    "isHovering": {
      backgroundColor: "blue"
    },
    "isNotHovering": {
      "backgroundColor":"red"
    }
  }
}

const RadiumLink = Radium(Link);

class divLink extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHovering: false,
      isActive: false
    }
  }

  handleMouseOver() {
    console.log("mouseover")
    this.setState({ isHovering: true });
  }

  handleMouseOut() {
    console.log("mouseout")
    this.setState({ isHovering: false });
  }

  render() {

    const hoverStyle = this.state.isHovering ? styles.linkStyle["isHovering"] : styles.linkStyle["isNotHovering"]

    return (
      <div
        style={[styles.divStyle.default, styles.divStyle.mediaQueries]}
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseOut={this.handleMouseOut.bind(this)} >
        <RadiumLink style={[styles.linkStyle.default, hoverStyle]} to={this.props.path}>{this.props.name}</RadiumLink>
      </div>
    );
  }
}

export default Radium(divLink);
