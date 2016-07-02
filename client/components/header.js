import React, { Component } from 'react';
import SpinMenu from './SpinMenu';
import MenuLink from './MenuLink';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '60px'
    // justifyContent: 'flex-start'
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

const Header = ({leftMenu, rightMenu}) => {
  return (
    <header className={css(styles.header)}>
      <SpinMenu className={css(styles.headerIcon)} />
      <MenuLink className={css(styles.headerMenus)} path={`/${leftMenu}`}>{leftMenu}</MenuLink>
      <MenuLink className={css(styles.headerMenus)} path={`/${rightMenu}`}>{rightMenu}</MenuLink>
    </header>
  )
}

export default Header;
