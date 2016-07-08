import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

const fields = [ 'firstname', 'lastname', 'email', 'password', 'passwordConfirm' ];

class Signup extends Component {

  render() {
    const {  fields: { firstname, lastname, email, password, passwordConfirm }, handleSubmit } = this.props;

    return (
      <div>
        <div className='ui attached message'>
          <div className='header'>
            Welcome to our site!
          </div>
          <p>Fill out the form below to sign-up for a new account</p>
        </div>

        <form className='ui form attached fluid segment'>
          <div className='two fields'>
            <div className='field'>
              <label>First Name</label>
              <input placeholder='First_Name' type='text' />
            </div>
            <div className='field'>
              <label>Last Name</label>
              <input placeholder='Last_Name' type='text' />
            </div>
          </div>
          <div className='field'>
            <label>Email</label>
            <input placeholder='E-mail' type='text' {...email} />
          </div>
          <div className='field'>
            <label>Password</label>
            <input placeholder='Password' type='password' {...password}/>
          </div>
          <div className='field'>
            <label>Password Confirm</label>
            <input placeholder='Password Confirm' type='password' {...passwordConfirm}/>
          </div>
          <div className='inline field'>
            <div className='ui checkbox'>
              <input type='checkbox' id='terms' />
              <label>I agree to the terms and conditions</label>
            </div>
          </div>
          <div className='ui blue submit button'>Submit</div>
        </form>
        <div className='ui bottom attached warning message'>
          <i className='icon help'></i>
          Already signed up? <Link to='/admin/signin'>Login here</Link> instead.
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signup',
  fields
})(Signup);
