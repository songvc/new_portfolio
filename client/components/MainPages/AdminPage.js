import React, { Component } from 'react';
import Loading from '../admin/loading';

class Admin extends Component {
  constructor(props){
    super(props);
    this.setState =  {
    }
  }

  render() {
    return (
      <div>
        <AdminHeader hasUser={}>
        {  loggedIn? <Loading />: <AdminPanel>}


        // if logged in then show container
      </div>
    );
  }
}

export default Admin;

// loggedIn?
//
// componentWillMount() {
//   // sets the initial state
//   this.setState({
//     isMenuOpened: false
//   })
//   this.toggleMenu = this.toggleMenu.bind(this);
// }
