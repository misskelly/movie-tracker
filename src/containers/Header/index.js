import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'; 
import { formType, currentUser, showFavorites }  from '../../actions/index';
import film from '../../images/film.png';
import hamburger from '../../images/hamburger.svg'


export class Header extends Component {
  handleClick = ({target}) => {
    target.textContent === 'Log-in' 
      ? this.props.formType('login')
      : this.props.formType('signup')
    switch(target.textContent) {
      case 'Log-out':
        this.props.logOutUser();
        this.props.showFavorites(false);
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
    const userInfo = (<h3 className='user-greeting'>{`Hello ${name}!`}</h3>)
    
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
        <nav className='desktop-nav'>
            { name && userInfo }
          <NavLink 
            to='/' 
            className='nav'>
            Home 
          </NavLink>
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
        <nav className='mobile-nav hidden'>
          <img className='menu-icon' alt='hamburger icon' src={hamburger}/>
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

Header.propTypes = {
  currentUser: PropTypes.object,
  formType: PropTypes.func,
  logOutUser: PropTypes.func,
  showFavorites: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);