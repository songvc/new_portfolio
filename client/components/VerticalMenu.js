import React, { Component } from 'react';
import SlideLink from './SlideLink';
import { Flexbox, FlexItem } from 'flexbox-react';

const dimension = {
  flexBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
  },
  flexItem: {
    flex: '1',
    height: '25%'
  }
}

const menus = [
  {
    "id": "1",
    "name": "Home",
    "path" : "/",
    "color" : "#F2D194",
    "icon" : "bars"
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
      <Flexbox {...dimension.flexBox}>
        {
          menus.map((menu) => {
            return (
              <FlexItem key={menu.id} {...dimension.flexItem}>
                <SlideLink message={menu}/>
              </FlexItem>
            )
          })
        }
      </Flexbox>
    )
  }
}

export default VerticalMenu;
