import React, { Component } from 'react';
import { Link } from 'react-router';

class AdminHeader extends Component {

  render() {
    return (
      <div>
        <Link to='/post'>Post</Link>
        <Link to='/login'>Login</Link>
      </div>
    );
  }
}

export default AdminHeader;
