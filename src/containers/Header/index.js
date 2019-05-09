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
    const { name, email } = this.props.currentUser;
    return(
      <header className='header'>
        <NavLink to='/' className='nav'> Home </NavLink>
        {/* { name ? (<div></div>)} */}
        <NavLink to={`${name ? '/favorites' : '/login'}`} className='nav'>
          <span onClick={this.handleClick}>{`${ name ? 'Favorites' : 'Create Account'}`}
          </span>
        </NavLink>
        <NavLink to={`${name ? '/' : '/login'}`} className='nav' >
          <span onClick={this.handleClick}>{`${ name ? 'Log-out' : 'Log In'}`}
          </span>
        </NavLink>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
  formType: (text) => dispatch(formType(text)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);