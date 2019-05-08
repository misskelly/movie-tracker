import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 


class Header extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <header className='header'>
        <NavLink to='/login' className='nav'> Create Account </NavLink>
        <NavLink to='/login' className='nav'> Log In </NavLink>
      </header>
    )
  }
}

export default Header;