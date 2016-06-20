import React, { Component } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import FontAwesome from 'react-fontawesome';

const styles = {
  divStyle: {
    "default": {
      "position":"relative",
      "flex": "1 50%",
      "height": "50%",
      "cursor": "pointer"
    },
    "mediaQueries": {
      "@media (max-Width: 540px)":{
        "flex": '1 100%',
        "height": "25%"
      }
    }
  },
  linkStyle: {
    "default": {
      "position":"absolute",
      "height": "100px",
      "weight": "100px",
      "textDecoration": "none"
    },
    "isHovering": {
      "display": "none"
    },
    "isNotHovering": {
      "display": "block"
    }
  },
  iconStyle: {
    "default":{
      "position":"absolute",
      "backgroundColor":"red",
      "display": "none"
    },
    "isHovering": {
      "display": "inline-block"
    },
    "isNotHovering": {
      "display": "none"
    }
  }
}

const RadiumLink = Radium(Link);
const RadiumFontAwesome = Radium(FontAwesome);

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

    const linkHover = this.state.isHovering ? styles.linkStyle["isHovering"] : styles.linkStyle["isNotHovering"]
    const iconHover = this.state.isHovering ? styles.iconStyle["isHovering"] : styles.iconStyle["isNotHovering"]

    return (
      <div
        style={[styles.divStyle.default, styles.divStyle.mediaQueries]}
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseOut={this.handleMouseOut.bind(this)} >
        <RadiumLink style={[styles.linkStyle.default, linkHover]} to={this.props.path}>{this.props.name}</RadiumLink>
        <RadiumFontAwesome
          name='rocket'
          size='2x'
          style={[styles.iconStyle, iconHover]}
        />
      </div>
    );
  }
}

export default Radium(divLink);
