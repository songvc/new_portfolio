import React, { Component } from 'react';
import DivLink from './link';
import LinkContainer from './LinkContainer'

const data = {
  container: {
    "nested": false,
    "children": [
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
      container: {
        "nested": true,
        "children": [
          twitter: {
            "name": 'Twitter',
            "path" : "/twitter",
            "color" : "",
            "icon" : ""
          },
          github: {
            "name": "Github",
            "path" : "/github",
            "color" : "",
            "icon" : ""
          },
          codepen: {
            "name": "Codepen",
            "path" : "/portfolio",
            "color" : "",
            "icon" : ""
          },
          contact: {
            "name": "Contact",
            "path" : "/contact",
            "color" : "",
            "icon" : ""
          }
        ]
      },
      lab: {
        "name": "Lab",
        "path" : "/lab",
        "color" : "",
        "icon" : ""
      }
    ]
  }


}

class frontPage extends Component {
  render () {
    console.log(data);
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
