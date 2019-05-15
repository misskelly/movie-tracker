import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postUser } from '../../utils/apiFetches/postUser';
import { fetchAnything } from '../../utils/apiFetches/fetchAnything';
import { currentUser, formType } from '../../actions';
import { Redirect } from 'react-router-dom';

export class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
      confirmPassword: '',
      userName: '',
      error: false,
      passwordMismatch: false
    }
  }

  formTypeHandler = () => {
    const { email, password, userName } = this.state;
    const userInfo = this.props.formType === 'login'
    ? ({ email, password })
    : ({ email, password, name: userName });
    const url = this.props.formType === 'login'
      ? 'http://localhost:3000/api/users'
      : 'http://localhost:3000/api/users/new'
    return ({ url, userInfo, email, userName})
  }

  fetchUserFavorites = async (userId) => {
    const favoritesUrl = `http://localhost:3000/api/users/${userId}/favorites`
    const favorites = await fetchAnything(favoritesUrl)
    return favorites.data;
  }

  submitUserData = async () => {
    const {url, userInfo, email, userName} = this.formTypeHandler();
    try {
      const response = await postUser(url, userInfo);
      this.props.formType === 'login' 
      ? this.props.signInUser({...response.data, favorites: await this.fetchUserFavorites(response.data.id)})
      : this.props.signInUser({ id:response.id, email, name: userName, favorites: []});
      await this.setState({ error: false});
    } catch(error) {
      this.setState({ error: true })
    }
  }

  handleChange = ({target}) => {
    this.setState({ [target.name]: target.value, passwordMismatch: false })
  } 
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, confirmPassword, password, userName } = this.state;
    if (this.props.formType === 'login') {
      (email.length && password.length) && this.submitUserData();
    } else {
      (email.length && password.length && confirmPassword === password && userName.length) && this.submitUserData();
    }
    const passwordMismatch = this.props.formType === 'signup' && password !== confirmPassword;
    this.setState({ passwordMismatch })
  }
  
  render() {
    const { formType, currentUser, changeForm } = this.props
    if (currentUser.name) return (<Redirect to='/'/>);
    const signUpInputs = (
      <div className="signup-form-inputs">
        <label 
          htmlFor='userName' 
          className='sign-up input-label'>
          Username
        </label>
        <input 
          onChange={this.handleChange} 
          name="userName" 
          type='text' 
          id='userName' 
          className='sign-up form-input'
          autoComplete='name'>
        </input>
        <label 
          htmlFor='email-input' 
          className='sign-up input-label'>
          E-mail
        </label>
        <input 
          type='email' 
          id='email-input' 
          className='sign-up form-input' 
          onChange={this.handleChange} 
          name='email'
          autoComplete="email">
          </input>
        <label 
          htmlFor='password-input' 
          className='sign-up input-label'>
          Password
        </label>
        <input 
          type='password' 
          id='password-input' 
          className='sign-up form-input' 
          onChange={this.handleChange} 
          name='password'
          autoComplete='new-password'>
        </input>
        <label 
          htmlFor='confirm-password-input' 
          className='sign-up input-label'>
          Confirm Password
        </label>
        <input 
          onChange={this.handleChange} 
          name="confirmPassword" 
          type='password' 
          id='confirm-password-input' 
          className='sign-up form-input'
          autoComplete='new-password'>
        </input>
      </div>)
    const signInInputs = (
      <div className="sign-in-inputs">
        <label 
        htmlFor='email-input' 
        className='email-input-label input-label'>
        E-mail
        </label>
          <input 
          type='email' 
          id='email-input' 
          className='form-input' 
          onChange={this.handleChange} 
          name='email' 
          autoComplete='username'>
        </input>
        <label 
          htmlFor='password-input' 
          className='password-input-label 
          input-label'>
          Password
        </label>
        <input 
          type='password' 
          id='password-input' 
          className='form-input' 
          onChange={this.handleChange} 
          name='password' 
          autoComplete='current-password'>
        </input>
      </div>)
    const createActLink = (
      <span 
        className='signup-link' 
        onClick={() => changeForm('signup')}>
        Create Account
      </span>)
    const errorText = formType === 'login'
      ? <p>Email and password do not match an account, check login info or {createActLink}</p>
      : 'Email has already been used.'
    return (
      <main className='login-page'>
        <h2 className='form-heading'>{ formType === 'login' ? 'LOGIN' : 'SIGN-UP' }</h2> 
        <form className='login-form' onSubmit={this.handleSubmit}>
          <fieldset className='login-fieldset'>
            { formType === 'login' ? signInInputs : signUpInputs }
            { this.state.passwordMismatch &&  <p>Passwords do not match</p>}
            { this.state.error && <p className='login-error'>{errorText}</p>}
            <input id='form-submit-btn' type="submit" value="Submit" />
          </fieldset>
        </form>
      </main>
    )
  }
}

export const mapStateToProps = (state) => ({
  formType: state.formType,
  currentUser: state.currentUser
})

export const mapDispatchToProps = (dispatch) => ({
  signInUser: ({id, name, email, favorites}) => 
    dispatch(currentUser(id, name, email, favorites)), 
  changeForm: (text) => dispatch(formType(text))
})

LoginPage.propTypes = {
  formType: PropTypes.string,
  currentUser: PropTypes.object,
  signInUser: PropTypes.func,
  changeForm: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
