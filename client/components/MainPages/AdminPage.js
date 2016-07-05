import React, { Component } from 'react';
import Loading from '../components/Admin/loading';

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
        <AdminHeader hasUser={}>
        { loggedIn? <Loading />: <Loading />}
      </div>
    )
  }
}

export default Admin;
