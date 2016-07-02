import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  spinContainer: {
    position: 'relative',
    height: '100%',
    minWidth: '60px',
    textAlign:'center',
    cursor: 'pointer',
    backgroundColor: 'white',
    ':before': {
      content: "''",
      position: 'absolute',
      height: '5px',
      width: '5px',
      top: '10%',
      left: '10%',
      backgroundColor:"#3ec8ac",
      transition: 'transform 0.5s ease-out'
    },
    ':after': {
      content: "''",
      position: 'absolute',
      height: '5px',
      width: '5px',
      bottom: '10%',
      right: '10%',
      backgroundColor:"#3ec8ac",
      transition: 'transform 0.5s ease-out'
    },
    ':hover:before': {
      backgroundColor: '#0B9579',
      transform: 'translateX(850%) rotate(1turn)'
    },
    ':hover:after': {
      backgroundColor: '#0B9579',
      transform: 'translate3d(-850%,0,0) rotate(1turn)'
    }
  },
  spinText: {
    color: '#3a4145',
    fontFamily: 'Futura',
    fontWeight: '800',
    fontSize: '36px',
    lineHeight: '60px'
  }
})

const SpinMenu = (props) => {
  return (
    <div onClick={props.onClick} className={css(styles.spinContainer)}>
      <div className={css(styles.spinText)}>VS</div>
    </div>
  )
}

SpinMenu.propTypes = {
  onClick: React.PropTypes.func
}

export default SpinMenu;
