import React, { Component } from 'react';
import Quadrant from '../Quadrant';
import SpinIcon from '../SpinIcon';

class frontPage extends Component {
  render () {
    return (
      <div>
        <Quadrant />
        <SpinIcon top={'50%'} left={'50%'} />
      </div>
    )
  }
}

export default frontPage;
