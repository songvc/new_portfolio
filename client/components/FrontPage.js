import React, { Component } from 'react';
import DivLink from './link';
import LinkContainer from './LinkContainer'

const name = {
  blog: {
    "name": "Blog",
    "path" : "/blog",
    "color" : "",
    "icon" : ""
  },
  portfolio: {
    "name": "Portfolio",
    "path" : "/portfolio",
    "color" : "",
    "icon" : ""
  },
  twitter: {
    "name": [ 'Twitter', 'Github', 'Codepen', 'Contact'],
    "path" : "/portfolio",
    "color" : "",
    "icon" : ""
  },
  github: {
    "name": "github",
    "path" : "/portfolio",
    "color" : "",
    "icon" : ""
  },
  codepen: {
    "name": "codepen",
    "path" : "/portfolio",
    "color" : "",
    "icon" : ""
  },
  contact: {
    "name": "contact",
    "path" : "/contact",
    "color" : "",
    "icon" : ""
  },
  lab: {
    "name": [ "lab" ],
    "path" : "/lab",
    "color" : "",
    "icon" : ""
  }
}

class frontPage extends Component {
  render () {
    console.log(name);
    return (
      <LinkContainer layout={"non-nested"}>
        <DivLink name={name.blog[0]} path='/blog'/>
        <DivLink name={name.portfolio[0]} path='/portfolio'/>
        <LinkContainer layout={"nested"}>
          <DivLink name={name.mixin[0]} path='/portfolio'/>
          <DivLink name={name.mixin[0]} path='/portfolio'/>
          <DivLink name={name.mixin[0]} path='/portfolio'/>
          <DivLink name={name.mixin[0]} path='/portfolio'/>
        </LinkContainer>
        <DivLink name={name.lab[0]} path='/lab'/>
      </LinkContainer>
    )
  }
}

export default frontPage;
