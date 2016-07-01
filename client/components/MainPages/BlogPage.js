import React, { Component } from 'react';
import Layout from '../Layout';

class Blog extends Component {
  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false
    })
  }

  toggleMenu() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }

  render() {
    return (
      <Layout page='blog'>
        <div>Blog</div>
      </Layout>
    );
  }
}

export default Blog;
