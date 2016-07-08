import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router';
import Icon from 'react-fontawesome';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    weight:  '100%',
    height:  '100%',
    display: 'block',
    cursor:  'pointer',
    overflow: 'hidden',
    color: 'black',
    ':hover strong': {
      left: '150%'
    },
    ':hover span': {
      left: '50%'
    }
  },
  text: {
    position: 'absolute',
    top: '50%',
    left:'50%',
    transform: 'translate3d(-50%,-50%,0)',
    textTransform:'uppercase',
    fontSize: '1.2em',
    letterSpacing: '0.1em',
    transition: 'left .3s ease-in-out',
  },
  icon: {
    position:'absolute',
    top: '50%',
    left:'-50%',
    transform: 'translate3d(-50%,-50%,0)',
    transition: 'left .3s ease-in-out',
  }
});

const SlideLink = ({ path, color, icon, children }) => {
  return (
    <Link className={css(styles.container)} style={{ backgroundColor:color }} to={path}>
      <strong className={css(styles.text)}>{children}</strong>
      <Icon className={css(styles.icon)} name={icon} size='3x'/>
    </Link>
  );
};

SlideLink.propTypes = {
  path: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired
};


export default SlideLink;
