import React, { Component } from 'react';
import Layout from '../Layout';
import Title from '../Title';

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
        <Title>Blog</Title>
      </Layout>
    );
  }
}

export default Blog;
