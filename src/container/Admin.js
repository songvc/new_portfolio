import React, { Component } from 'react';
import AdminHeader from '../components/Admin/AdminHeader';
import Signin from '../components/Admin/Signin';

class Admin extends Component {

  render() {
    return (
      <div>
        <AdminHeader />
        {this.props.children}
      </div>
    );
  }
}

export default Admin;
