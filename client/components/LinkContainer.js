import React, { Component, PropTypes } from 'react';
import DivLink from './link';
import styles from '../css/flexbox.css';
import { Flexbox, FlexItem } from 'flexbox-react';

class LinkContainer extends Component {

  render() {

    const {data} = this.props.children;
    const {children} = this.props.children;
    const style = data.nested ? { ...styles.base, ...styles.nested } : styles.base;
    const mediaQueries = data.nested ? styles.mediaQueries : styles.mediaQueries;

    return (

      <Flexbox {...style} style={mediaQueries}>
        {children.map(child => {
          return (
            <FlexItem key={child.data.id} {...styles.flexItem}>
              {(child.children.length > 0) ? <LinkContainer children={child}/>
              : <DivLink message={child.data} />}
            </FlexItem>
          )
        })}
      </Flexbox>

    )
  }
}


export default LinkContainer;
