import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postUser } from '../../utils/apiFetches/postUser';
import { currentUser } from '../../actions';

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
      : this.props.signInUser({id:response.id, email, name: userName})
      await this.setState({ error: false})
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
    const header = this.props.formType === 'login' 
      ? 'LOGIN'
      : 'SIGN-UP';
    return (
      <main className='login-page'>
        <h2>{ header }</h2> 
        <form className='login-form' onSubmit={this.handleSubmit}>
          <fieldset className='login-fieldset'>
            { this.props.formType === 'signup' && (
              <div>
                <label for='userName' className='password-input-label input-label'>Username</label>
                <input onChange={this.handleChange} name="userName" type='text' id='userName' className='form-input'></input>
              </div>
            )}
            <label for='email-input' className='email-input-label input-label'>E-mail</label>
            <input type='text' id='email-input' className='form-input' onChange={this.handleChange} name='email'></input>
            <label for='password-input' className='password-input-label input-label'>Password</label>
            <input type='text' id='password-input' className='form-input' onChange={this.handleChange} name='password'></input>
            { this.props.formType === 'signup' && (
              <div>
                <label for='confirm-password-input' className='password-input-label input-label'>Confirm Password</label>
                <input onChange={this.handleChange} name="confirmPassword" type='text' id='confirm-password-input' className='form-input'></input>
              </div>
            )}
            <input type="submit" value="Submit" />
          </fieldset>
        </form>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  formType: state.formType
})

const mapDispatchToProps = (dispatch) => ({
  signInUser: ({id, name, email}) => dispatch(currentUser(id, name, email))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);