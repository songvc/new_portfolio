import React, { Component } from 'react';
import { spring, Motion } from 'react-motion';

const dimension = {
  position : 'absolute',
  height: '60px',
  width: '60px',
  margin: '-30px',
  lineHeight: '60px',
  borderRadius: '28px',
  textAlign: 'center'
}

const style = {
  color: '#3a4145',
  backgroundColor: 'white',
  fontFamily: 'Futura',
  fontWeight: '800',
  fontSize: '36px'
}

class CenterIcon extends Component {

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

    const { top, left } = this.props.position;
    const css = { ...dimension, top, left, ...style}

    return (
      <span style={css}
        onMouseOver={this.handleHover.bind(this)}
        onMouseOut={this.handleHover.bind(this)}>
        <Motion defaultStyle={{x: 0}} style={{x: spring(this.state.isHovering && 360)}}>
          {interpolate => {
            let animateStyle = {
              transform: `rotate(${interpolate.x}deg)`
            }
            return (
              <div style={animateStyle}>VS</div>
            )
          }}
        </Motion>
      </span>
    )
  }
}

export default CenterIcon;
