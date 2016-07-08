import React, { Component } from 'react';
import AdminBlogPost from './AdminBlogPost';

class AdminMain extends Component {

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

export default AdminMain;
