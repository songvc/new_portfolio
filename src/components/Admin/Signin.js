import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

const fields = [ 'email', 'password' ];

class Signin extends Component {

  handleFormSubmit({ email, password }) {
    console.log(email, password);
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage && !this.props.authenticated) {
      return (
        <div className="ui error message">
          <div className="header">
            There was some errors with your submission
          </div>
          <ul className="list">
            <li>{this.props.errorMessage}</li>
          </ul>
        </div>
      );
    }
  }

  render() {

    const {  fields: { email, password }, handleSubmit } = this.props;

    return (
      <div>
        <h3 className='ui block header'>
          Please enter your email and password
        </h3>
        {this.renderAlert()}
        <form className='ui form' onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className='field'>
            <label>Email:</label>
            <input {...email} type='text' placeholder='Email' autoComplete='on' />
          </div>
          <div className='field'>
            <label>Password</label>
            <input {...password} type='password' placeholder='Password' />
          </div>
          <button className='ui button' type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    authenticated: state.auth.authenticated
   };
}

export default reduxForm({
  form: 'Signin',
  fields
}, mapStateToProps, actions)(Signin);
