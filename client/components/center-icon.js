import React, { Component } from 'react';

const style = {
  "position" : "absolute",
  "top": "50%",
  "left": "50%",
  "height": "60px",
  "lineHeight":"60px",
  "width": "60px",
  "margin": "-30px",
  "borderRadius": "30px"
}

class centerIcon extends Component {
  render() {
    return (
      <div style={style}>Hello</div>
    )
  }
}

export default centerIcon;
