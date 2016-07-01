import React, { Component } from 'react';
import HoverImage from '../HoverImage';

class PortflioList extends Component {

  render() {

    const portfolios = this.props.data;

    return (
      <div>
        {
          portfolios.map((portfolio) => {
            return (
              <HoverImage src={portfolio.imgSrc} description={portfolio.description}>
                {portfolio.name}
              </HoverImage>
            )
          })
        }
      </div>
    )
  }
}
