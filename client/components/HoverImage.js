import React, { Component } from 'react';

const dimension = {
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

class HoverImage extends Component {
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

    const { src, description } = this.props

    return (
      <div
        style={css}
        onMouseOver={this.handleHover.bind(this)}
        onMouseOut={this.handleHover.bind(this)}
        onClick={this.handleClick.bind(this)}>
        <p style={textStyle}>{this.props.children}</p>
        <p>{description}</p>
        <img src={src} />
      </div>
    );
  }
}

export default HoverImage;
