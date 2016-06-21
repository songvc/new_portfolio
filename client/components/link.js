import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Radium from 'radium';
import FontAwesome from 'react-fontawesome';

const styles = {
  divStyle: {
    "default": {
      "position":"relative",
      "weight": "100%",
      "height": "100%",
      "cursor": "pointer",
      "justifyContent": "center",
      "alignItems": "center",
      "@media (max-Width: 540px)":{
        "flex": '1 100%',
        "height": "25%"
      }
    },
  },
  linkStyle: {
    "default": {
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

const RadiumFontAwesome = Radium(FontAwesome);

class divLink extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHovering: false,
      isActive: false
    }
  }

  handleClick() {
    browserHistory.push(this.props.path);
  }

  handleMouseOver() {
    this.setState({ isHovering: true });
  }

  handleMouseOut() {
    this.setState({ isHovering: false });
  }

  render() {

    const linkHover = (this.state.isHovering) ? styles.linkStyle["isHovering"] : styles.linkStyle["isNotHovering"]
    const iconHover = (this.state.isHovering) ? styles.iconStyle["isHovering"] : styles.iconStyle["isNotHovering"]

    return (
      <div
        style={[styles.divStyle.default]}
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseOut={this.handleMouseOut.bind(this)}
        onClick={this.handleClick.bind(this)}>
        <strong style={[styles.linkStyle.default, linkHover]}>{this.props.name}</strong>
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
