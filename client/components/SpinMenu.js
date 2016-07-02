import React, { Component } from 'react';
import { spring, Motion } from 'react-motion';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  spinContainer: {
    position: 'relative',
    height: '60px',
    width: '60px',
    backgroundColor: 'white',
    textAlign:'center',
    cursor: 'pointer'
  },
  spinText: {
    color: '#3a4145',
    fontFamily: 'Futura',
    fontWeight: '800',
    fontSize: '36px',
    lineHeight: '60px'
  },
  spinCube: {
    position: 'absolute',
    height: '5px',
    width: '5px',
    backgroundColor:"#3ec8ac"
  }
})

class SpinMenu extends Component {

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

    return (
      <div className={css(styles.spinContainer)}
        onMouseOver={this.handleHover.bind(this)}
        onMouseOut={this.handleHover.bind(this)}>
        <Motion {...this.getSpringProps()}>
          {interpolate => {
            let animateCube1 = {
              top: 5,
              left: 5 + interpolate.xAxis,
              transform: `rotate(${interpolate.degree}deg)`
            }

            return (
              <div className={css(styles.spinCube)} style={animateCube1}></div>
            )
          }}
        </Motion>
        <div className={css(styles.spinText)}>VS</div>
        <Motion {...this.getSpringProps()}>
          {interpolate => {
            let animateCube2 = {
              bottom: 5,
              right: 5 + interpolate.xAxis,
              transform: `rotate(${interpolate.degree}deg)`
            }

            return (
              <div className={css(styles.cubeStyle)} style={animateCube2}></div>
            )
          }}
        </Motion>
      </div>
    )
  }
}

export default SpinMenu;
