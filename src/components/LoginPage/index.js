import React, { Component } from 'react';
// import Form from '../../containers/Form'


class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      currentForm: 'login'
    }
  }

  render() {
    return (
      <main className='login-page'>
        {/* <Form /> */}
      </main>
    )
  }
}

export default LoginPage;