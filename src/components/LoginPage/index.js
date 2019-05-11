import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postUser } from '../../utils/apiFetches/postUser';
import { currentUser, formType } from '../../actions';
import { Redirect } from 'react-router-dom';
class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
      confirmPassword: '',
      userName: '',
      error: false
    }
  }

  validateUser = async () => {
    const { email, password, userName } = this.state;
    const userInfo = this.props.formType === 'login'
    ? ({ email, password })
    : ({ email, password, name: userName });
    const url = this.props.formType === 'login'
    ? 'http://localhost:3000/api/users'
    : 'http://localhost:3000/api/users/new';
    
    try {
      const response = await postUser(url, userInfo);
      await this.props.formType === 'login' 
      ? this.props.signInUser(response.data)
      : this.props.signInUser({ id:response.id, email, name: userName });
      await this.setState({ error: false});
    } catch(error) {
      this.setState({ error: true })
    }
  }
  
  handleChange = ({target}) => {
    this.setState({ [target.name]: target.value })
  } 
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, confirmPassword, password, userName } = this.state;
    if (this.props.formType === 'login') {
      (email.length && password.length) && this.validateUser();
    } else {
      (email.length && password.length && confirmPassword === password && userName.length) && this.validateUser();
    }
  }
  
  render() {
    const { formType, currentUser, changeForm } = this.props
    const createActLink = <span className='signup-link' onClick={() => changeForm('signup')} >Create Account</span>
    const header = formType === 'login' 
      ? 'LOGIN'
      : 'SIGN-UP';
    const errorText = formType === 'login'
      ? <p>Email and password do not match an account, check login info or {createActLink}</p>
      : 'An account for this email already exists.'
    if (currentUser.name) return (<Redirect to='/'/>);
    return (
      <main className='login-page'>
        <h2>{ header }</h2> 
        <form className='login-form' onSubmit={this.handleSubmit}>
          <fieldset className='login-fieldset'>
            { formType === 'signup' && (
              <div>
                <label htmlFor='userName' className='password-input-label input-label'>Username</label>
                <input onChange={this.handleChange} name="userName" type='text' id='userName' className='form-input'></input>
              </div>
            )}
            <label htmlFor='email-input' className='email-input-label input-label'>E-mail</label>
            <input type='email' id='email-input' className='form-input' onChange={this.handleChange} name='email' autoComplete='username'></input>
            <label htmlFor='password-input' className='password-input-label input-label'>Password</label>
            <input type='password' id='password-input' className='form-input' onChange={this.handleChange} name='password' autoComplete='current-password'></input>
            { formType === 'signup' && (
              <div>
                <label htmlFor='confirm-password-input' className='password-input-label input-label'>Confirm Password</label>
                <input onChange={this.handleChange} name="confirmPassword" type='password' id='confirm-password-input' className='form-input' autoComplete='new-password'></input>
              </div>
            )}

            { this.state.error && <p className='login-error'>{errorText}</p>}
            <input type="submit" value="Submit" />
          </fieldset>
        </form>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  formType: state.formType,
  currentUser: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  signInUser: ({id, name, email}) => dispatch(currentUser(id, name, email)), 
  changeForm: (text) => dispatch(formType(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);