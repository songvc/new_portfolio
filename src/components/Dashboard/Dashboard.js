import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Post from './Post';

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>
        {this.props.message}
        <div>
          <div className="ui horizontal segments">
            <div className="ui segment">
              <p>Blog</p>
            </div>
            <div className="ui segment">
              <p>Portfolio</p>
            </div>
            <div className="ui segment">
              <p>Lab</p>
            </div>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

// <AdminBlogPost />


function mapStateToProps(state) {
  return {
    message: state.auth.message
  };
}

export default connect(mapStateToProps, actions)(Dashboard);
