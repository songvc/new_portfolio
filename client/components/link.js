import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import styles from '../css/link.css';
import Icon from 'react-fontawesome';

class divLink extends Component {
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
    const divStyle = { ...styles.divStyle.base, "backgroundColor": color };
    const linkHover = Object.assign({}, styles.linkStyle.base, this.state.isHovering && styles.linkStyle.isHovering);
    const iconHover = Object.assign({}, styles.iconStyle.base, this.state.isHovering && styles.iconStyle.isHovering);

    return (
      <div
        style={divStyle}
        onMouseOver={this.handleHover.bind(this)}
        onMouseOut={this.handleHover.bind(this)}
        onClick={this.handleClick.bind(this)}>
        <strong style={linkHover}>{name}</strong>
        <Icon name={icon} size='3x' style={iconHover}/>
      </div>
    );
  }
}

export default divLink;
