import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'; 
import { formType }  from '../../actions/index'


export class Header extends Component {
  constructor() {
    super()
  }

  handleClick = ({target}) => {
    target.textContent === 'Log In' 
      ? this.props.formType('login')
      : this.props.formType('signup')
  }

  render() {
    return(
      <header className='header'>
        <NavLink to='/' className='nav'> Home </NavLink>
        <NavLink to='/login' className='nav'> <span onClick={this.handleClick}>Create Account</span> </NavLink>
        <NavLink to='/login' className='nav' > <span onClick={this.handleClick}>Log In</span> </NavLink>
      </header>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  formType: (text) => dispatch(formType(text)) 
})
export default connect(null, mapDispatchToProps)(Header)