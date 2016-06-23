import React, { Component, PropTypes } from 'react';
import DivLink from './link';
import styles from '../css/flexbox.css';
import { Flexbox, FlexItem } from 'flexbox-react';

class LinkContainer extends Component {

  render() {

    const {data} = this.props.children;
    const {children} = this.props.children;
    const style = data.nested ? Object.assign(styles.base, styles.nested) : styles.base;

    return (

      <Flexbox {...style} >
        {children.map(child => {
          return (
            <FlexItem key={child.data.id} flex="1" width="50%">
              {child.children.length > 0
              ? <LinkContainer children={child}/>
            : <DivLink message={child.data} />}
            </FlexItem>
          )
        })}
      </Flexbox>

    )
  }
}


export default LinkContainer;
