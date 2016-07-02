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
    textDecoration: 'none',
    padding: '0px 25px',
    ':hover': {
      backgroundColor: '#545B5F'
    }
  }
})

const MenuLink = ({path, children}) => {
  return (
    <Link className={css(styles.menuLink)} to={path}>{children}</Link>
  )
}

export default MenuLink;
