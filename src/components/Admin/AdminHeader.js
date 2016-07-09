import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class AdminHeader extends Component {
  renderLeftLinks() {
    if (this.props.authenticated) {
      return [
        <Link key={1} className="item" to='/admin/dashboard'>Home</Link>,
        <Link key={2} to='/admin/post' className="item ui icon button">
          <i className="plus icon"></i>
        </Link>
      ];
    } else {
      return <Link className="item" to='/admin'>Admin Home</Link>;
    }
  }

  renderRightLinks() {
    if (this.props.authenticated) {
      // show a link to sign output
      return <Link className="item" to='/admin/signout'>SignOut</Link>;
    } else {
      return [
        <Link key={1} className="item" to='/admin/signin'>SignIn</Link>,
        <Link key={2} className="item" to='/admin/signup'>SignUp</Link>
      ];
    }
  }

  render() {
    return (
      <div className="ui menu">
          {this.renderLeftLinks()}
        <div className="right menu">
          {this.renderRightLinks()}
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
export default connect(mapStateToProps)(AdminHeader);
