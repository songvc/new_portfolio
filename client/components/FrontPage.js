import React, { Component } from 'react';
import LinkContainer from './LinkContainer';
import CenterIcon from './center-icon';

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
        "color" : "#AAC39C",
        "icon" : "feed"
      },
      "children": []
    },
    {
      "data": {
        "id": "2",
        "name": "Portfolio",
        "path" : "/portfolio",
        "color" : "#5A86BF",
        "icon" : "camera-retro"
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
            "color" : "#F2D194",
            "icon" : "twitter"
          },
          "children": []
        },
        {
          "data": {
            "id": "4",
            "name": "Github",
            "path" : "/github",
            "color" : "#FFE9C0",
            "icon" : "github"
          },
          "children": []
        },
        {
          "data": {
            "id": "5",
            "name": "Codepen",
            "path" : "/portfolio",
            "color" : "#C9A25B",
            "icon" : "codepen"
          },
          "children": []
        },
        {
          "data": {
            "id": "6",
            "name": "Contact",
            "path" : "/contact",
            "color" : "#9C752B",
            "icon" : "envelope"
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
        "color" : "#D95A4E",
        "icon" : "archive"
      },
      "children": []
    }
  ]

}


class frontPage extends Component {
  render () {
    return (
      <div>
        <LinkContainer children={tree} />
        <CenterIcon />
      </div>
    )
  }
}

export default frontPage;
