import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import AdminBlogPost from './AdminBlogPost';

class AdminMain extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>
        <div className="ui top attached tabular menu">
          <a className="active item">
            Blog
          </a>
          <a className="item">
            Portfolio
          </a>
          <a className="item">
            Lab
          </a>
          <div className="right menu">
            <div className="item">

            </div>
          </div>
        </div>
        <div className="ui bottom attached segment">
          <AdminBlogPost />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, actions)(AdminMain);
