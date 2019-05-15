import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'; 
import { formType, currentUser, showFavorites }  from '../../actions/index';
import film from '../../images/film.png'


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
    const { name } = this.props.currentUser;
    const userInfo = (
      <div>
        <h3 className='user-greeting'>{`Hello ${name}`}</h3>
      </div>
    )
    return(
      <header className='header' onClick={ this.handleClick }>
        <article className='logo-wrapper'>
          <h2 className='icon-text'>MT</h2>
          <NavLink 
            to='/' 
            className='home-logo'>
          <img 
            src={film} 
            alt='film with star icon' className='film-icon'/>
          </NavLink>
        </article>
        <nav>
          <NavLink 
            to='/' 
            className='nav'>
            Home 
          </NavLink>
          { name && userInfo}
          <NavLink 
            to={`${name ? '/' : '/login'}`}
            className='nav'>
            {`${ name ? 'Favorites' : 'Create Account'}`}
          </NavLink>
          <NavLink 
            to={`${name ? '/' : '/login'}`} className='nav' >
            {`${ name ? 'Log-out' : 'Log-in'}`}
          </NavLink>
        </nav>
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