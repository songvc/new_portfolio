import React, { Component } from 'react';
// import { Link } from 'react-router';
import DivLink from './link';

const flexbox = {
  "display": "flex",
  "flexDirection":"row",
  "flexWrap": "wrap"
}

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
      <div style={flexbox}>
        <DivLink name={name.blog[0]} path='/blog'/>
        <DivLink name={name.portfolio[0]} path='/portfolio'/>
        <DivLink name={name.mixin[0]} path='/mixin'/>
        <DivLink name={name.lab[0]} path='/lab'/>
      </div>
    )
  }
}

export default frontPage;
