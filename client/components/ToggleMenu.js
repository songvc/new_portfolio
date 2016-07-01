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

  getSpringProps() {
    return {
      defaultStyle: {
        xAxis: 0,
        degree: 0
      },
      style:{
        xAxis: spring(this.state.isHovering && 45),
        degree: spring(this.state.isHovering && 720)
      },
    };
  }

  render() {
    const css = { ...dimension, ...style }

    return (
      <div style={css}
        onMouseOver={this.handleHover.bind(this)}
        onMouseOut={this.handleHover.bind(this)}>
        <Motion {...this.getSpringProps()}>

          {interpolate => {
            let animateCube1 = {
              position: 'absolute',
              top: 5,
              left: 5 + interpolate.xAxis,
              height: '5px',
              width: '5px',
              backgroundColor:"#3ec8ac",
              transform: `rotate(${interpolate.degree}deg)`
            }

            return (
              <div style={animateCube1}></div>
            )
          }}
        </Motion>
        <div>VS</div>
        <Motion {...this.getSpringProps()}>

          {interpolate => {
            let animateCube2 = {
              position: 'absolute',
              bottom: 5,
              right: 5 + interpolate.xAxis,
              height: '5px',
              width: '5px',
              backgroundColor:"#3ec8ac",
              transform: `rotate(${interpolate.degree}deg)`
            }

            return (
              <div style={animateCube2}></div>
            )
          }}
        </Motion>
      </div>
    )
  }
}

export default ToggleMenu;
