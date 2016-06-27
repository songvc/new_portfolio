import React, { Component } from 'react';
import { spring, Motion } from 'react-motion';

const style = {
  "position" : "absolute",
  "top": "50%",
  "left": "50%",
  "height": "60px",
  "lineHeight":"60px",
  "width": "60px",
  "color": "#3a4145",
  "margin": "-30px",
  "borderRadius": "28px",
  "backgroundColor": "white",
  "fontFamily": "Futura",
  "fontWeight": "800",
  "fontSize": "36px",
  "textAlign": "center"
}

class CenterIcon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    };
  }

  handleHover() {
    this.setState({ isHovering: !this.state.Hovering });
  }

  render() {
    return (
      <div style={style}
        onMouseOver={this.handleHover.bind(this)}
        onMouseOut={this.handleHover.bind(this)}>
        <Motion defaultStyle={{x: 0}} style={{x: spring((this.state.isHovering)? 360: 0)}}>
          {current => {
            let innerStyle = {
              transform: `rotate(${current.x}deg)`
            }
            return (
              <div style={innerStyle}>VS</div>
            )
          }}
        </Motion>
      </div>
    )
  }
}

export default CenterIcon;
