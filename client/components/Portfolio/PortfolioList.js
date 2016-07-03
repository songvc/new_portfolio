import React, { Component } from 'react';
import HoverImage from '../HoverImage';
import { Flexbox, FlexItem } from 'flexbox-react';

const dimension = {
  flexBox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  flexItem: {
    flex: '1',
    width: '20%',
    height: '250px'
  }
}

class PortfolioList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { portfolios } = this.props;

    return (
      <Flexbox {...dimension.flexBox}>
        {portfolios.map((portfolio, index) => {
          return (
            <FlexItem key={index} {...dimension.flexItem}>
              <HoverImage key={index} {...portfolio} />
            </FlexItem>
          )
        })}
      </Flexbox>
    )
  }
}

export default PortfolioList;
