import React, { Component, PropTypes } from 'react';
import SlideLink from './SlideLink';
import styles from '../css/flexbox.css';
import { Flexbox, FlexItem } from 'flexbox-react';

class LinkContainer extends Component {

  render() {

    const { data } = this.props.children;
    const { children } = this.props.children;
    const style = data.nested ? { ...styles.base, ...styles.nested } : styles.base;

    return (

      <Flexbox {...style}>
        {children.map(child => {
          return (
            <FlexItem key={child.data.id} {...styles.flexItem}>
              {(child.children.length > 0) ? <LinkContainer children={child}/>
            : <SlideLink key={child.data.id} {...child.data}>{child.data.name}</SlideLink>}
            </FlexItem>
          )
        })}
      </Flexbox>

    )
  }
}


export default LinkContainer;
