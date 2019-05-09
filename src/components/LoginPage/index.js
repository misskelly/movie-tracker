import React, { Component } from 'react';
// import Form from '../../containers/Form'


class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      existingUser: true,
      password: '',
      email: '',
      confirmPassword: ''
    }
  }

  render() {
    const header = this.state.existingUser 
      ? 'LOGIN'
      : 'SIGN-UP';
    return (
      <main className='login-page'>
        <h2>{ header }</h2>
        <form className='login-form'>
          <fieldset className='login-fieldset'>
            <label for='email-input' className='email-input-label input-label'>E-mail</label>
            <input type='text' id='email-input' className='form-input'></input>
            <label for='password-input' className='password-input-label input-label'>Password</label>
            <input type='text' id='password-input' className='form-input'></input>
            { !this.state.existingUser && (
              <fieldset>
                <input type='text' id='confirm-password-input' className='form-input'></input>
                <label for='password-input' className='password-input-label input-label'>Confirm Password</label>
              </fieldset>
            )}
            <input type="submit" value="Submit" />
          </fieldset>
        </form>
      </main>
    )
  }
}

export default LoginPage;