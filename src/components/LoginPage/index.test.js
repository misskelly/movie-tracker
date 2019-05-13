import React from 'react';
import { LoginPage, mapStateToProps, mapDispatchToProps } from './index';
import { shallow } from 'enzyme';

import { postUser } from '../../utils/apiFetches/postUser';
import { fetchAnything } from '../../utils/apiFetches/fetchAnything';
import { currentUser, formType } from '../../actions';
import { Redirect } from 'react-router-dom';

jest.mock('../../utils/apiFetches/fetchAnything.js')
jest.mock('../../utils/apiFetches/postUser')

describe('LoginPage', () => {
  const mockLoginFormType = 'login'
  const mockSignUpFormType = 'signup'
  const logInUrl = 'http://localhost:3000/api/users';
  const signUpUrl = 'http://localhost:3000/api/users/new';
  const mockFavoriteMovies = [{ id: 1, movie_title: 'Avengers Infinity War' }]
  const mockUserInput = {
      password: '123',
      email: 'nim@sum.com',
      confirmPassword: '123',
      userName: 'Nim'
  }
  const defaultState = {
    password: '',
    email: '',
    confirmPassword: '',
    userName: '',
    error: false,
    passwordMismatch: false
  }

  const mockCurrentUser = {
    name: '',
    id: '',
    email: '',
    favorites: []
  }

  fetchAnything.mockImplementation(() => ({ data: mockFavoriteMovies }))  

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < LoginPage 
        currentUser={mockCurrentUser}  />
    )
  })
  it('should have set default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  })

  it('should match component snapshot with login formtype', () => {
    wrapper = shallow(
      < LoginPage 
        currentUser={ mockCurrentUser }
        formType={ mockLoginFormType }  />
    )
    expect(wrapper).toMatchSnapshot();
  })

  it('should match component snapshot with signup formtype', () => {
    wrapper = shallow(
      < LoginPage 
        currentUser={ mockCurrentUser }
        formType={ mockSignUpFormType }  />
    )
    expect(wrapper).toMatchSnapshot();
  })

  it('should handle user body and url for posting login', () => {
    wrapper = shallow(
      < LoginPage 
        currentUser={ mockCurrentUser }
        formType={ mockLoginFormType }  />
    )
    wrapper.setState({...mockUserInput });
    const expected = {
      url: 'http://localhost:3000/api/users',
      userInfo: {
        password: '123', 
        email: 'nim@sum.com', 
      },
      email: 'nim@sum.com',
      userName: 'Nim'
    }
    expect(wrapper.instance().formTypeHandler()).toEqual(expected)
  })

  it('should handle user body and url for posting signup', () => {
    wrapper = shallow(
      < LoginPage 
        currentUser={ mockCurrentUser }
        formType={ mockSignUpFormType }  />
    )
    wrapper.setState({...mockUserInput });
    const expected = {
      url: 'http://localhost:3000/api/users/new',
      userInfo: {
        password: '123', 
        email: 'nim@sum.com', 
        name: 'Nim'
      },
      email: 'nim@sum.com',
      userName: 'Nim'
    }
    expect(wrapper.instance().formTypeHandler()).toEqual(expected)
  })

  it('should fetch users favorites when logged in', async () => {
    const mockUserId = 1;
    const result = await wrapper.instance().fetchUserFavorites(mockUserId);
    expect(fetchAnything).toHaveBeenCalledWith("http://localhost:3000/api/users/1/favorites");
    expect(result).toEqual(mockFavoriteMovies);
  })

  describe('submitUserData', () => {
    
    it('should fetch post request for user login using correct params', () => {
      wrapper = shallow(
        < LoginPage 
          currentUser={ mockCurrentUser }
          formType={ mockLoginFormType }  />
      )
      wrapper.setState({...mockUserInput });
      wrapper.instance().submitUserData();
      expect(postUser).toHaveBeenCalledWith(logInUrl, {
        password: '123', 
        email: 'nim@sum.com', 
      })
    })

    it('should fetch post request for user signup using correct params', () => {
      wrapper = shallow(
        < LoginPage 
          currentUser={ mockCurrentUser }
          formType={ mockSignUpFormType }  />
      )
      wrapper.setState({...mockUserInput });
      wrapper.instance().submitUserData();
      expect(postUser).toHaveBeenCalledWith(signUpUrl, {
        password: '123', 
        email: 'nim@sum.com', 
        name: 'Nim'
      })
    })

    it('should signInUser with successfull login', () => {
      
    })
  })
})