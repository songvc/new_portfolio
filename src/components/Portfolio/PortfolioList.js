import React, { Component } from 'react';
import HoverImage from '../HoverImage';
import { StyleSheet, css } from 'aphrodite';
import { Flex, Box } from 'reflexbox';

class PortfolioList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { portfolios } = this.props;

    return (
      <Flex wrap>
        {portfolios.map((portfolio) => {
          return (
            <Box col={3} key={portfolio.id}>
              <HoverImage key={portfolio.id} {...portfolio} />
            </Box>
          );
        })}
      </Flex>
    );
  }
}

export default PortfolioList;
