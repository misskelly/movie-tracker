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

  validateUser = () => {
    const { email, password } = this.state;
    const userInfo = { email, password }
    const url = 'http://localhost:3000/api/users'
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => console.log(result))
  } 

  handleChange = ({target}) => {
    this.setState({[target.name]: target.value})
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateUser();
  }

  render() {
    const header = this.state.existingUser 
      ? 'LOGIN'
      : 'SIGN-UP';
    return (
      <main className='login-page'>
        <h2>{ header }</h2>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <fieldset className='login-fieldset'>
            <label for='email-input' className='email-input-label input-label'>E-mail</label>
            <input type='text' id='email-input' className='form-input' onChange={this.handleChange} name='email'></input>
            <label for='password-input' className='password-input-label input-label'>Password</label>
            <input type='text' id='password-input' className='form-input' onChange={this.handleChange} name='password'></input>
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