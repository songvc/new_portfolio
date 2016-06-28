import React, { Component } from 'react';
import { spring, Motion } from 'react-motion';

const layout = {
  "height": "100%",
  "width": "100%",
  "lineHeight":"125%",
  "textAlign": "center"
}

const style = {
  "color": "#3a4145",
  "backgroundColor": "white",
  "fontFamily": "Futura",
  "fontWeight": "800",
  "fontSize": "36px"
}



class ToggleMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    };
  }

  handleHover() {
    this.setState({ isHovering: !this.state.isHovering });
  }

  render() {
    return (
      <div style={Object.assign(layout, style)}
        onMouseOver={this.handleHover.bind(this)}
        onMouseOut={this.handleHover.bind(this)}>
        <Motion defaultStyle={{x: 0}} style={{x: spring((this.state.isHovering)? 360: 0, {stiffness: 170, damping: 26}) }}>
          {current => {
            let cubeStyle1 = {
              transform: `rotate(${current.x}deg)`,
              transform: `left`
            }

            return (
              <span style={cubeStyle1}>?</span>
            )
          }}
        </Motion>
        <span>VS</span>
        <Motion defaultStyle={{x: 0}} style={{x: spring((this.state.isHovering)? 360: 0, {stiffness: 170, damping: 26}) }}>
          {current => {
            let cubeStyle2 = {
              transform: `rotate(${current.x}deg)`
            }

            return (
              <span style={cubeStyle2}>?</span>
            )
          }}
        </Motion>
      </div>
    )
  }
}
// <span style={cubeStyle2}>?</span>

// let cubeStyle2 = {
//   position: "absolute",
//   bottom: "0",
//   right: "0",
//   transform: `rotate(${current.x}deg)`
// }
export default ToggleMenu;
