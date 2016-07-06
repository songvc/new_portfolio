import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {

  constructor(props){
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ email, password }) {
    console.log(email, password);
  }
  
  render() {

    const { handleSubmit, fields: { email, password }} = this.props;

    <form onSubmit={handleSubmit(this.handleFormSubmit)}>
      <fieldset>
        <label>Email:</label>
        <input {...email} type="text"/>
      </fieldset>
      <fieldset>
        <label>Password:</label>
        <input {...password} type="text"/>
      </fieldset>
      <button action="submit">Sign in</button>
    </form>
  }
}

export default reduxForm({
  form: '',
  fields: ['email', 'password']
})(Signin);
