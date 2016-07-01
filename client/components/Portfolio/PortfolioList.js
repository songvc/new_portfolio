import React, { Component } from 'react';
import HoverImage from '../HoverImage';

class PortfolioList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props.portfolios);
    const { portfolios } = this.props;

    return (
      <div>
        {portfolios.map((portfolio) => {
          return (
            <HoverImage key={portfolio.id} data={portfolio} />
          )
        })}
      </div>
    )
  }
}

export default PortfolioList;
