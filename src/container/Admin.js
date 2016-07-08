import React, { Component } from 'react';
import AdminHeader from '../components/Admin/AdminHeader';
import Signin from '../components/Admin/Signin';

class Admin extends Component {

  render() {
    return (
      <div>
        <AdminHeader />
        <div className='ui container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default Admin;
