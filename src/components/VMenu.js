import React, { Component } from 'react';
import SlideLink from './SlideLink';
import { StyleSheet, css } from 'aphrodite';
import { Flex, Box } from 'reflexbox';

const styles = StyleSheet.create({
  container: {
    height: '100vh'
  }
})

const VMenu = () => {
  return (
    <Flex column align='center' className={css(styles.container)}>
      <Box col={12} auto><SlideLink path='/' color='#F2D194' icon='bars'>Home</SlideLink></Box>
      <Box col={12} auto><SlideLink path='/blog' color='#AAC39C' icon='feed'>Blog</SlideLink></Box>
      <Box col={12} auto><SlideLink path='/portfolio' color='#5A86BF' icon='camera-retro'>Portfolio</SlideLink></Box>
      <Box col={12} auto><SlideLink path='/lab' color='#D95A4E' icon='archive'>Lab</SlideLink></Box>
    </Flex>
  )
}

VMenu.propTypes = {

}

export default VMenu;
