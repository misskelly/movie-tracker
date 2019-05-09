import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'; 
import { formType, currentUser }  from '../../actions/index'

export class Header extends Component {
  handleClick = ({target}) => {
    target.textContent === 'Log-in' 
      ? this.props.formType('login')
      : this.props.formType('signup')
    target.textContent === 'Log-out' && this.props.logOutUser()
  }

  render() {
    const { name, email } = this.props.currentUser;
    const userInfo = (
      <div>
        <h3>{`Yo watup ${name}`}</h3>
      </div>
    )
    return(
      <header className='header'>
        <NavLink to='/' className='nav'> Home </NavLink>
        { name && userInfo}
        <NavLink to={`${name ? '/favorites' : '/login'}`} className='nav'>
          <span onClick={this.handleClick}>{`${ name ? 'Favorites' : 'Create Account'}`}
          </span>
        </NavLink>
        <NavLink to={`${name ? '/' : '/login'}`} className='nav' >
          <span onClick={this.handleClick}>{`${ name ? 'Log-out' : 'Log-in'}`}
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
  formType: (text) => dispatch(formType(text)),
  logOutUser: () => dispatch(currentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);