import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

const fields = [ 'email', 'password' ];

class Signin extends Component {

  handleFormSubmit({ email, password }) {
    console.log(email, password);
  }

  render() {

    const {  fields: { email, password }, handleSubmit } = this.props;

    return (
      <form className="ui form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="field">
          <label>Email:</label>
          <input {...email} type="text" placeholder="Email" />
        </div>
        <div className="field">
          <label>Password</label>
          <input {...password} type="text" placeholder="Password" />
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" tabIndex="0" className="hidden" />
            <label>I agree to the Terms and Conditions</label>
          </div>
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'simple',
  fields
})(Signin);
