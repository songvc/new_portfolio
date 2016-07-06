import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {

  handleFormSubmit({ email, password }) {
    console.log(email, password);
  }

  render() {

    const {  fields: { email, password }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
    )
  }
}

export default reduxForm({
  form: '',
  fields: ['email', 'password']
})(Signin);

// constructor(props){
//   super(props);
//   this.handleFormSubmit = this.handleFormSubmit.bind(this);
// }

// this.handleFormSubmit = this.handleFormSubmit.bind(this);
