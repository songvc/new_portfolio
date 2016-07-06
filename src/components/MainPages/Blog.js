import React, { Component } from 'react';
import Layout from '../Layout';
import { Flex, Box } from 'reflexbox';

class Blog extends Component {

  render() {
    return (
      <div>
        <Flex align='center'>
          <Box col={4} auto>sdfsdf</Box>
          <Box col={4} auto>sdfsdf</Box>
          <Box col={4} auto>sdfsdf</Box>
          <Box col={4} auto>sdfsdf</Box>
        </Flex>

        <Flex align='center'>
          <Box col={8} auto>sdfsdf</Box>
          <Box col={2} auto>sdfsdf</Box>
          <Box col={1} auto>sdfsdf</Box>
          <Box col={1} auto>sdfsdf</Box>
        </Flex>

        <Flex>
          <Box col={6} auto>sdfsdf</Box>
          <Box col={6} auto>sdfsdf</Box>
        </Flex>

        <Flex column>
          <Box col={12} auto>sdfsdf</Box>
          <Box col={12} auto>sdfsdf</Box>
          <Box col={12} auto>sdfsdf</Box>
          <Box col={12} auto>sdfsdf</Box>
        </Flex>
      </div>
    );
  }
}

export default Blog;
