import React, { Component } from 'react';
import { spring, Motion } from 'react-motion';

const dimension = {
  position: 'relative',
  height: '60px',
  width: '60px',
  textAlign:'center',
}

const style = {
  color: '#3a4145',
  backgroundColor: 'white',
  fontFamily: 'Futura',
  fontWeight: '800',
  fontSize: '36px',
  lineHeight: '60px',
  cursor: 'pointer'
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
    const css = { ...dimension, ...style }

    return (
      <div style={css}
        onMouseOver={this.handleHover.bind(this)}
        onMouseOut={this.handleHover.bind(this)}>
        <Motion
          defaultStyle={{degree: 0, x:0, scale:0}}
          style={{degree: spring(this.state.isHovering && 720),
          x: spring(this.state.isHovering && 45)
         }}>

          {current => {
            let cubeStyle1 = {
              position: 'absolute',
              top: 5,
              left: 5 + current.x,
              height: '5px',
              width: '5px',
              backgroundColor:"#3ec8ac",
              transform: `rotate(${current.degree}deg)`
            }

            return (
              <div style={cubeStyle1}></div>
            )
          }}
        </Motion>
        <div>VS</div>
        <Motion
          defaultStyle={{degree: 0, x:0, scale:0 }}
          style={{degree: spring(this.state.isHovering && 720),
          x: spring(this.state.isHovering && 45)
         }}>

          {current => {
            let cubeStyle2 = {
              position: 'absolute',
              bottom: 5,
              right: 5 + current.x,
              height: '5px',
              width: '5px',
              backgroundColor:"#3ec8ac",
              transform: `rotate(${current.degree}deg)`
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
