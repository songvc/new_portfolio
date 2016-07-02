import React, { Component } from 'react';
import SlideLink from './SlideLink';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  vmenuContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh'
  },
  vmenuFlex: {
    flex: '1 25%'
  }
})

const VMenu = () => {
  return (
    <ul className={css(styles.vmenuContainer)}>
      <li className={css(styles.vmenuFlex)}>
        <SlideLink path='/' color='#F2D194' icon='bars'>Home</SlideLink>
      </li>
      <li className={css(styles.vmenuFlex)}>
        <SlideLink path='/blog' color='#AAC39C' icon='feed'>Blog</SlideLink>
      </li>
      <li className={css(styles.vmenuFlex)}>
        <SlideLink path='/portfolio' color='#5A86BF' icon='camera-retro'>Portfolio</SlideLink>
      </li>
      <li className={css(styles.vmenuFlex)}>
        <SlideLink path='/lab' color='#D95A4E' icon='archive'>Lab</SlideLink>
      </li>
    </ul>
  )
}


export default VMenu;
