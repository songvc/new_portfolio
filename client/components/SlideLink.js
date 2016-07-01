import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import styles from '../css/link.css';
import Icon from 'react-fontawesome';

class SlideLink extends Component {
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
    const { name, color, icon } = this.props.message;
    const divCSS = { ...styles.divStyle.base, "backgroundColor": color };
    const linkCSS = Object.assign({}, styles.linkStyle.base, this.state.isHovering && styles.linkStyle.hover);
    const iconCSS = Object.assign({}, styles.iconStyle.base, this.state.isHovering && styles.iconStyle.hover);

    return (
      <div
        style={divCSS}
        onMouseOver={this.handleHover.bind(this)}
        onMouseOut={this.handleHover.bind(this)}
        onClick={this.handleClick.bind(this)}>
        <strong style={linkCSS}>{name}</strong>
        <Icon style={iconCSS} name={icon} size='3x' />
      </div>
    );
  }
}

export default SlideLink;
