import React, { Component } from 'react';
import SpinMenu from './SpinMenu';
import MenuLink from './MenuLink';
import { StyleSheet, css } from 'aphrodite';
import { Flex, Box } from 'reflexbox';

const styles = StyleSheet.create({
  header: {
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
});

const Header = ({toggleMenu, leftMenu, rightMenu}) => {
  return (
    <Flex className={css(styles.header)}>
      <Box col={1}><SpinMenu onClick={toggleMenu}/></Box>
      <Box col={9}></Box>
      <Box col={1}><MenuLink path={`/${leftMenu}`}>{leftMenu}</MenuLink></Box>
      <Box col={2}><MenuLink path={`/${rightMenu}`}>{rightMenu}</MenuLink></Box>
    </Flex>
  );
};

Header.propTypes = {
  toggleMenu: React.PropTypes.func.isRequired,
  leftMenu: React.PropTypes.string.isRequired,
  rightMenu: React.PropTypes.string.isRequired
};

export default Header;
