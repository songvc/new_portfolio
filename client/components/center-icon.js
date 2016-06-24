import React, { Component } from 'react';

const style = {
  "position" : "absolute",
  "top": "50%",
  "left": "50%",
  "height": "60px",
  "lineHeight":"50px",
  "width": "60px",
  "color": "#3a4145",
  "margin": "-30px",
  "borderRadius": "30px",
  "backgroundColor": "white",
  "fontFamily": "arial",
  "fontWeight": "800",
  "fontSize": "56px",
  "textAlign": "center",
  "transition": "transform 2s"
}

class centerIcon extends Component {

  consturctor() {
    this.state = {
      isHovering: false
    }
  }

  handleMouseOver() {
    this.setState({ isHovering: true });
  }

  handleMouseOut() {
    this.setState({ isHovering: false });
  }

  render() {
    return (
      <div style={style}
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseOut={this.handleMouseOut.bind(this)}>v</div>
    )
  }
}

export default centerIcon;
