import React, { Component } from 'react';
import { spring, Motion } from 'react-motion';

const layout = {
  "position": "fixed",
  "top": "0",
  "left": "0",
  "height": "60px",
  "width": "60px",
  "textAlign":"center",
}

const style = {
  "color": "#3a4145",
  "backgroundColor": "white",
  "fontFamily": "Futura",
  "fontWeight": "800",
  "fontSize": "36px",
  "lineHeight": "60px"
}

const textStyle= {
  "lneHeight": "30px"
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
        <Motion
          defaultStyle={{x: 0, y:0}}
          style={{x: spring(this.state.isHovering && 360),
          y: spring(this.state.isHovering && 45) }}>

          {current => {
            let cubeStyle1 = {
              position: 'absolute',
              top: 5,
              left: 5 + current.y,
              height: "5px",
              width: "5px",
              backgroundColor:"blue",
              transform: `rotate(${current.x}deg)`
            }

            return (
              <div style={cubeStyle1}></div>
            )
          }}
        </Motion>
        <div>VS</div>
        <Motion
          defaultStyle={{x: 0, y:0 }}
          style={{x: spring(this.state.isHovering && 360),
          y: spring(this.state.isHovering && 45) }}>

          {current => {
            let cubeStyle2 = {
              position: 'absolute',
              bottom: 5,
              right: 5 + current.y,
              height: "5px",
              width: "5px",
              backgroundColor:"blue",
              transform: `rotate(${current.x}deg)`
            }

            return (
              <div style={cubeStyle2}></div>
            )
          }}
        </Motion>
      </div>
    )
  }
}

export default ToggleMenu;
