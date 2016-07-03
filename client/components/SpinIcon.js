import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    position : 'absolute',
    height: '60px',
    width: '60px',
    borderRadius: '30px',
    margin: '-30px',
    textAlign: 'center'
  },
  icon: {
    color: '#3a4145',
    backgroundColor: 'white',
    lineHeight: '60px',
    fontFamily: 'Futura',
    fontWeight: '800',
    fontSize: '36px',
    transition: 'transform 1s ease-out',
    ':hover': {
      transform: 'rotate(360deg)',
    },
    ':before': {
      content: "''",
      position: 'absolute',
      top: '0',
      left: '0',
      height: '100%',
      width: '100%',
      borderRadius: '30px',
      border: '0px solid #3EC8AC',
      transition: 'border 0.5s linear'
    },
    ':hover:before': {
      border: '30px solid #3EC8AC'
    }
  }
})

const SpinIcon = ({top, left}) => {
  return (
    <span
      className={css(styles.container, styles.icon)}
      style={{top, left}}>
      VS
    </span>
  )
}

SpinIcon.propTypes = {
  top: React.PropTypes.string.isRequired,
  left: React.PropTypes.string.isRequired
}

export default SpinIcon;
