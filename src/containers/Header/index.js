import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'; 
import { formType, currentUser, showFavorites }  from '../../actions/index'

export class Header extends Component {
  handleClick = ({target}) => {
    target.textContent === 'Log-in' 
      ? this.props.formType('login')
      : this.props.formType('signup')
    switch(target.textContent) {
      case 'Log-out':
        this.props.logOutUser()
        break;
      case 'Favorites':
        this.props.showFavorites(true)
        break;
      default:
      this.props.showFavorites(false)
    }
  }

  render() {
    const { name, email } = this.props.currentUser;
    const userInfo = (
      <div>
        <h3>{`Yo watup ${name}`}</h3>
      </div>
    )
    return(
      <header className='header' onClick={ this.handleClick }>
        <NavLink to='/' className='nav'>
          Home 
        </NavLink>
        { name && userInfo}
        <NavLink to={`${name ? '/favorites' : '/login'}`} className='nav'>
            {`${ name ? 'Favorites' : 'Create Account'}`}
        </NavLink>
        <NavLink to={`${name ? '/' : '/login'}`} className='nav' >
            {`${ name ? 'Log-out' : 'Log-in'}`}
        </NavLink>
      </header>
    )
  }
}

export const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

export const mapDispatchToProps = dispatch => ({
  formType: (text) => dispatch(formType(text)),
  logOutUser: () => dispatch(currentUser()),
  showFavorites: (bool) => dispatch(showFavorites(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);