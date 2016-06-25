import React, { Component } from 'react';
import { spring, Motion } from 'react-motion';

const style = {
  "position" : "absolute",
  "top": "50%",
  "left": "50%",
  "height": "60px",
  "lineHeight":"55px",
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

class CenterIcon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    };
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
        onMouseOut={this.handleMouseOut.bind(this)}>
        <Motion defaultStyle={{x: 0}} style={{x: spring((this.state.isHovering)? 360: 0)}}>
          {current => {
            let innerStyle = {
              transform: `rotate(${current.x}deg)`
            }
            return (
              <div style={innerStyle}>v</div>
            )
          }}
        </Motion>
      </div>
    )
  }
}

export default CenterIcon;
