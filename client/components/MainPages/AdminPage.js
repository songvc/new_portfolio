import React, { Component } from 'react';
import Loading from '../components/Admin/loading';
import Loading from '../admin/loading';

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
        {  loggedIn? <Loading />: <AdminPanel>}


        // if logged in then show container
      </div>
    );
  }
}

export default Admin;
