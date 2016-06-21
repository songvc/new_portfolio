import React, { Component, PropTypes } from 'react';
import DivLink from './link';
import Radium from 'radium';
import { Flexbox, FlexItem } from 'flexbox-react';

// const styles = {
//   "default": {
//     "display": "flex",
//     "flexDirection": "row",
//     "flexWrap": "wrap"
//   },
//   "non-nested": {
//     "height": "100%"
//   },
//   "nested": {
//     "flex": "1 50%",
//     "height": "50%",
//     "@media (max-Width: 540px)": {
//       "flexDirection": "column",
//       "height": "25%"
//     }
//   }
// }

class LinkContainer extends Component {

  render() {

    const {data} = this.props.children;
    const {children} = this.props.children;

    return (

      <Flexbox style={data}>
        {children.map(child => {
          return (
            <FlexItem key={child.data.id} flex="1" width="50%">
              {child.children.length > 0
              ? <LinkContainer children={child}/>
              : <DivLink
                  key={child.data.id}
                  name={child.data.name}
                  to={child.data.path} />}
            </FlexItem>
          )
        })}
      </Flexbox>

    )
  }
}


export default LinkContainer;
