import React, { Component } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

const styles = {
  divStyle: {
    "default": {
      "backgroundColor":"red",
      "textAlign":"center",
      "flex": "1 50%"
    },
    "row": {
      "backgroundColor": "blue"
    },
    "column": {
      "flex": "1 100%"
    },
    "mediaQueries": {
      "@media (min-Width: 960px)":{
        "flex": '1 100%'
      }
    },
  },
  linkStyle: {
    "default": {
      "height": "100%",
      "weight": "100%"
    },
    ":hover": {
      "backgroundColor":"black"
    }
  }
}

const RadiumLink = Radium(Link);

class divLink extends Component {
  render() {
    return (
      <div style={[styles.divStyle.default, styles.divStyle.mediaQueries]}>
        <RadiumLink style={styles.linkStyle} to={this.props.path}>{this.props.name}</RadiumLink>
      </div>
    )
  }
}

export default Radium(divLink);
