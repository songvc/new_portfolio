import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  figure: {
    display: 'block',
    position: 'relative',
    width: '100%',
    height: '100%',
    background: '#3085a3',
    textAlign: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
    margin: '0',
    ':hover h2': {
      transform: 'translate3d(0,-10px,0)'
    },
    ':hover h2:after': {
      opacity: '1',
      transform: 'translate3d(0,-30px,0)'
    },
    ':hover p': {
      opacity: '1',
      transform: 'translate3d(0,-60px,0)'
    }
  },
  image: {
    display: 'block',
    position: 'relative',
    minHeight: '100%',
    maxWidth: '100%',
    opacity: '0.8'
  },
  figCaption: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    padding: '0.8em',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: '0.8em',
    textAlign: 'right'
  },
  title: {
    position: 'absolute',
    top: '50px',
    right: '30px',
    left: '30px',
    wordSpacing: '-0.15em',
    fontWeight: '300',
    transition: 'transform 0.3s',
    margin: '0',

    ':after': {
      content: "''",
      position: 'absolute',
      top: '200%',
      left: '0',
      width: '100%',
      height: '4px',
      background: '#fff',
      opacity: '0',
      transition: 'all 0.3s'
    }
  },
  description: {
    position: 'absolute',
    right: '30px',
    bottom: '-50px',
    padding: '0',
    opacity: '0',
    fontSize: '0.6em',
    transition: 'all 0.3s'
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '1000'
  }
});

const HoverImage = ({ path, name, src, description }) => {
  return (
    <figure className={css(styles.figure)}>
      <img className={css(styles.image)} src="http://tympanus.net/Development/HoverEffectIdeas/img/13.jpg" alt="img01"/>
      <figcaption className={css(styles.figCaption)}>
        <h2 className={css(styles.title)}>{name}</h2>
        <p className={css(styles.description)}>{description}</p>
        <a classname={css(styles.overlay)} href={path}></a>
      </figcaption>
    </figure>
  )
}

HoverImage.propTypes = {
  path: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
}

export default HoverImage;
