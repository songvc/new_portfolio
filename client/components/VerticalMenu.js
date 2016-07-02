import React, { Component } from 'react';
import SlideLink from './SlideLink';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  vmContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh'
  },
  vmFlex: {
    flex: '1 25%'
  }
})

// const dimension = {
//   flexBox: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '100%',
//     height: '100vh',
//   },
//   flexItem: {
//     flex: '1',
//     height: '25%'
//   }
// }

const VerticalMenu = () => {
  return (
    <nav className={css(styles.vmContainer)}>
      <div className={css(styles.vmFlex)}>
        <SlideLink path='/' color='#F2D194' icon='bars'>Home</SlideLink>
      </div>
      <div className={css(styles.vmFlex)}>
        <SlideLink path='/blog' color='#AAC39C' icon='feed'>Blog</SlideLink>
      </div>
      <div className={css(styles.vmFlex)}>
        <SlideLink path='/portfolio' color='#5A86BF' icon='camera-retro'>Portfolio</SlideLink>
      </div>
      <div className={css(styles.vmFlex)}>
        <SlideLink path='/lab' color='#D95A4E' icon='archive'>Lab</SlideLink>
      </div>
    </nav>
  )
}

export default VerticalMenu;
