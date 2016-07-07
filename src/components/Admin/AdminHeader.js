import React, { Component } from 'react';
import { Link } from 'react-router';

class AdminHeader extends Component {

  render() {
    return (
      <div className="ui menu">
        <a className="item">Browse</a>
        <a className="item">Submit</a>
        <div className="right menu">
          <Link className="item" to='/admin/signin'>SignIn</Link>
          <Link className="item" to='/admin/signout'>SignOut</Link>
        </div>
      </div>
    );
  }
}

export default AdminHeader;
