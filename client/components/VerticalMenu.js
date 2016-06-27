import React, { Component } from 'react';
import { Flexbox, FlexItem } from 'flexbox-react';

const style = {
  "base": {
    "display": "flex",
    "flexDirection": "column",
    "width": "100%",
    "height": "100%",
    "backgroundColor": "red"
  },
  "flexItem": {
    "flex": "1",
    "width": "25%"
  }
}

const menus = [
  {
    "id": "1",
    "name": "Home",
    "path" : "/",
    "color" : "#AAC39C",
    "icon" : "feed"
  },
  {
    "id": "2",
    "name": "Blog",
    "path" : "/blog",
    "color" : "#AAC39C",
    "icon" : "feed"
  },
  {
    "id": "3",
    "name": "Portfolio",
    "path" : "/portfolio",
    "color" : "#5A86BF",
    "icon" : "camera-retro"
  },
  {
    "id": "4",
    "name": "Lab",
    "path" : "/lab",
    "color" : "#D95A4E",
    "icon" : "archive"
  }
  
]


class VerticalMenu extends Component {
  render() {
    return (
      <Flexbox {...style.base}>
        {
          menus.map((map) => {
            return (
              <FlexItem {...style.flexItem}>
                <DivLink message={map}/>
              </FlexItem>
            )
          })
        }
      </Flexbox>
    )
  }
}

export default VerticalMenu;
