import React, { Component } from 'react';
import divLink from './link';

class frontPage extends Component {
  const name = {
    blog: [ 'Blog' ],
    portfolio: [ 'portfolio' ],
    mixin: [ 'Twitter', 'Github', 'Codepen', 'Contact'],
    lab: [ 'Lab' ]
  };

  render () {
    return (
      <div>
        <divLink name='a' path='/blog'/>
        <divLink name='b' path='/portfolio'/>
        <divLink name='c' path='mixin'/>
        <divLink name='d' path='lab'/>
      </div>
    )
  }
}

export default frontPage;
