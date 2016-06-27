import React, { Component } from 'react';
import Header from './header';

const rootStyle = {
  "height": "100%"
}

class Blog extends Component {
  render() {
    return (
      <div style={rootStyle}>
        <Header />
        <div>blog</div>
      </div>
    )
  }
}

export default Blog;
