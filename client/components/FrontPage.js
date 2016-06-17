import React, { Component } from 'react';
import DivLink from './link';
import LinkContainer from './LinkContainer'
// import { Grid, Row, Col } from 'react-flexbox-grid';


const name = {
  blog: [ 'Blog' ],
  portfolio: [ 'Portfolio' ],
  mixin: [ 'Twitter', 'Github', 'Codepen', 'Contact'],
  lab: [ 'Lab' ]
}

class frontPage extends Component {
  render () {
    console.log(name);
    return (
      <LinkContainer height={"100%"}>
        <DivLink name={name.blog[0]} path='/blog' height={"50%"}/>
        <DivLink name={name.portfolio[0]} path='/portfolio' height={"50%"}/>
        <LinkContainer height={"50%"} name={name.mixin} customProp={"1 1 50%"}>
          <DivLink name={name.mixin[0]} path='/mixin' height={"50%"} />
          <DivLink name={name.mixin[0]} path='/mixin' height={"50%"} />
          <DivLink name={name.mixin[0]} path='/mixin' height={"50%"} />
          <DivLink name={name.mixin[0]} path='/mixin' height={"50%"} />
        </LinkContainer>
        <DivLink name={name.lab[0]} path='/lab' height={"50%"}/>
      </LinkContainer>
    )
  }
}

export default frontPage;
