import React, { Component, PropTypes } from 'react';
import SlideLink from './SlideLink';
import { StyleSheet, css } from 'aphrodite';
import { Flex, Box } from 'reflexbox';

const styles = StyleSheet.create({
  container: {
    height: '100vh'
  },
  nested: {
    height: '100%'
  }
})

const Quadrant = () => {
  return (
    <Flex wrap className={css(styles.container)}>
      <Box sm={12} lg={6}><SlideLink path='/blog' color='#AAC39C' icon='feed'>Blog</SlideLink></Box>
      <Box sm={12} lg={6}><SlideLink path='/portfolio' color='#5A86BF' icon='camera-retro'>Portfolio</SlideLink></Box>
      <Box sm={12} lg={6}>
        <Flex wrap className={css(styles.nested)}>
          <Box sm={12} lg={6}><SlideLink path='/twitter' color='#F2D194' icon='twitter'>Twitter</SlideLink></Box>
          <Box sm={12} lg={6}><SlideLink path='/admin' color='#FFE9C0' icon='github'>Github</SlideLink></Box>
          <Box sm={12} lg={6}><SlideLink path='/portfolio' color='#C9A25B' icon='codepen'>Codepen</SlideLink></Box>
          <Box sm={12} lg={6}><SlideLink path='/portfolio' color='#9C752B' icon='envelope'>Contact</SlideLink></Box>
        </Flex>
      </Box>
      <Box sm={12} lg={6}><SlideLink path='/lab' color='#D95A4E' icon='archive'>Lab</SlideLink></Box>
    </Flex>
  )
}

export default Quadrant;
