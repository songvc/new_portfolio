import React, { Component } from 'react';
import AdminHeader from '../Admin/AdminHeader';

class Admin extends Component {
  constructor(props){
    super(props);
    this.setState =  {
      loggedIn: false
    }
  }

  render() {
    return (
      <div>
        <AdminHeader />
      </div>
    );
  }
}

export default Admin;
