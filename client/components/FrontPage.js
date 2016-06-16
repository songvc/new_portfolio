import React, { Component } from 'react';
// import { Link } from 'react-router';
import divLink from './link';

const name = {
  blog: [ 'Blog' ],
  portfolio: [ 'portfolio' ],
  mixin: [ 'Twitter', 'Github', 'Codepen', 'Contact'],
  lab: [ 'Lab' ]
}

class frontPage extends Component {
  render () {
    console.log(name);
    return (
      <div>
        <divLink name={name.blog[0]} path='/blog'/>
        <divLink name={name.portfolio[0]} path='/portfolio'/>
        <divLink name={name.mixin[0]} path='/mixin'/>
        <divLink name={name.lab[0]} path='/lab'/>
      </div>
    )
  }
}

export default frontPage;
