import React, { Component } from 'react';
import LinkContainer from './LinkContainer';
import Radium from 'radium';
import { Flexbox, FlexItem } from 'flexbox-react';

const tree = {
  "data": {
    "flexDirection":"row",
    "flexWrap":"wrap",
    "minHeight":"100%",
    "width":"100%"
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
        "flexDirection":"row",
        "flexWrap":"wrap",
        "minHeight":"100%"
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

const mediaQueries = {
  "@media (maxWidth: 540px)":{
    "flex": '1 100%',
    "width": "100%",
    "height": "25%"
  }
}


class frontPage extends Component {
  render () {
    return (
      <LinkContainer children={tree} />
    )
  }
}

export default frontPage;
