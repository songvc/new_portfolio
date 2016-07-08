import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router';

const styles = StyleSheet.create({
  menuLink: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#545B5F',
    ':hover': {
      backgroundColor: '#6E7579'
    }
  },
  text: {
    color: 'white',
    fontSize: '15px',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '0.1em'
  }
});

const MenuLink = ({path, children}) => {
  return (
    <Link className={css(styles.menuLink, styles.text)} to={path}>{children}</Link>
  );
};

MenuLink.propTypes = {
  path: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired
};

export default MenuLink;
