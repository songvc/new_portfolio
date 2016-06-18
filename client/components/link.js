import React, { Component } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

const RadiumLink = Radium(Link);

const styles = {
  divStyle: {
    "default": {
      "backgroundColor":"red",
      "textAlign":"center",
      "flex": "1 50%"
    },
    "@media (min-width: 320px)": {
      "flex": "1 100%"
    },
    "row": {
      "backgroundColor": "blue"
    },
    "column": {
      "flex": "1 100%"
    }
  },
  linkStyle: {
    "default": {
      "height": "100%",
      "weight": "100%"
    },
    ":hover": {
      "backgroundColor":"blue"
    }
  }
}

@Radium
class divLink extends Component {

  render() {
    return (
      <div style={[styles.divStyle.default, styles.divStyle.row]}>
        <Link style={styles.linkStyle} to={this.props.path}>{this.props.name}</Link>
      </div>
    )
  }
}


export default divLink;
