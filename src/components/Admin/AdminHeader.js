import React, { Component } from 'react';
import { Link } from 'react-router';
import MenuLink from '../MenuLink';
import { StyleSheet, css } from 'aphrodite';
import { Flex, Box } from 'reflexbox';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#545B5F',
    height: '50px'
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

class AdminHeader extends Component {

  render() {
    return (
      <Flex className={css(styles.header)}>
        <Box col={6}><MenuLink path='/admin/signin'>SignIn</MenuLink></Box>
        <Box col={6}><MenuLink path='/admin/signout'>SignOut</MenuLink></Box>
      </Flex>
    );
  }
}


export default AdminHeader;
