import React, { Component } from 'react';
import LinkContainer from './LinkContainer';
import Radium from 'radium';
import { Flexbox, FlexItem } from 'flexbox-react';

const tree = {
  "data": {
    "nested": false
  },
  "children": [
    {
      "data": {
        "id": "1",
        "name": "Blog",
        "path" : "/blog",
        "color" : "red",
        "icon" : ""
      },
      "children": []
    },
    {
      "data": {
        "id": "2",
        "name": "Portfolio",
        "path" : "/portfolio",
        "color" : "blue",
        "icon" : ""
      },
      "children": []
    },
    {
      "data": {
        "nested": true
      },
      "children": [
        {
          "data": {
            "id": "3",
            "name": "Twitter",
            "path" : "/twitter",
            "color" : "yellow",
            "icon" : ""
          },
          "children": []
        },
        {
          "data": {
            "id": "4",
            "name": "Github",
            "path" : "/github",
            "color" : "green",
            "icon" : ""
          },
          "children": []
        },
        {
          "data": {
            "id": "5",
            "name": "Codepen",
            "path" : "/portfolio",
            "color" : "orange",
            "icon" : ""
          },
          "children": []
        },
        {
          "data": {
            "id": "6",
            "name": "Contact",
            "path" : "/contact",
            "color" : "black",
            "icon" : ""
          },
          "children": []
        }
      ]
    },
    {
      "data": {
        "id": "7",
        "name": "Lab",
        "path" : "/lab",
        "color" : "",
        "icon" : ""
      },
      "children": []
    }
  ]

}


class frontPage extends Component {
  render () {
    return (
      <LinkContainer children={tree} />
    )
  }
}

export default frontPage;
