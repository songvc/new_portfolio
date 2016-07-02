import React, { Component } from 'react';
import SpinMenu from './SpinMenu';
import MenuLink from './MenuLink';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '60px',
    backgroundColor: '#545B5F'
  },
  headerIcon: {
    color: 'white'
  },
  headerMenus: {
    backgroundColor: '#545B5F',
    ':hover': {
      backgroundColor: '#545B5F'
    }
  }
})

const Header = ({children}) => {
  return (
    <nav className={css(styles.header)}>
      {children}
    </nav>
  )
}

Header.propTypes = {
  children: React.PropTypes.array.isRequired
}

export default Header;
