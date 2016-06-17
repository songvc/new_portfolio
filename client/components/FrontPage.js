import React, { Component } from 'react';
import DivLink from './link';
import LinkContainer from './LinkContainer'


const name = {
  blog: [ 'Blog' ],
  portfolio: [ 'Portfolio' ],
  mixin: [ 'Twitter', 'Github', 'Codepen', 'Contact'],
  lab: [ 'Lab' ]
}

class frontPage extends Component {
  render () {
    console.log(name);
    return (
      <LinkContainer>
        <DivLink name={name.blog[0]} path='/blog'/>
        <DivLink name={name.portfolio[0]} path='/portfolio'/>
        <DivLink name={name.mixin[0]} path='/portfolio'/>
        <DivLink name={name.lab[0]} path='/lab'/>
      </LinkContainer>
    )
  }
}

export default frontPage;
