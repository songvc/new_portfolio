import React, { Component } from 'react';
import { browserHistory } from 'react-router';

const dimension = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  weight: '100%',
  textAlign: 'center',
}

const style = {
  base: {
    backgroundColor: '#3a4145',
    fontSize: '15px',
    cursor: 'pointer'
  },
  hover: {
    backgroundColor: '#545B5F'
  }
}

const textStyle ={
  color: 'white',
  margin: '0 15px'
}

class MenuLink extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHovering: false
    }
  }

  handleClick() {
    browserHistory.push(this.props.message.path);
  }

  handleHover() {
    this.setState({ isHovering: !this.state.isHovering })
  }

  render() {
    const css = Object.assign({}, dimension, style.base, this.state.isHovering && style.hover);
    return (
      <div
        style={css}
        onMouseOver={this.handleHover.bind(this)}
        onMouseOut={this.handleHover.bind(this)}
        onClick={this.handleClick.bind(this)}>
        <p style={textStyle}>{this.props.children}</p>
      </div>
    );
  }
}

export default MenuLink;
