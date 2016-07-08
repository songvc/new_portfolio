import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div className='ui info message'>
        <i className='close icon'></i>
        <div className='header'>
          Thanks for visiting our website.
        </div>
        <ul className='list'>
          <li>Hope to see you back again</li>
        </ul>
      </div>
    );
  }
}

export default connect(null, actions)(Signout);
