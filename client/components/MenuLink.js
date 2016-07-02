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
    color: 'white',
    fontSize: '15px',
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundColor: '#545B5F',
    ':hover': {
      backgroundColor: '#6E7579'
    }
  }
})

const MenuLink = ({path, children}) => {
  return (
    <Link className={css(styles.menuLink)} to={path}>{children}</Link>
  )
}

MenuLink.propTypes = {
  path: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired
}

export default MenuLink;
