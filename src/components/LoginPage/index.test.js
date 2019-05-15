import React from 'react';
import { LoginPage, mapStateToProps, mapDispatchToProps } from './index';
import { shallow } from 'enzyme';
import { postUser } from '../../utils/apiFetches/postUser';
import { fetchAnything } from '../../utils/apiFetches/fetchAnything';
import { currentUser, formType } from '../../actions';

jest.mock('../../utils/apiFetches/fetchAnything.js')
jest.mock('../../utils/apiFetches/postUser')

describe('LoginPage', () => {
  const mockLoginFormType = 'login'
  const mockSignUpFormType = 'signup'
  const logInUrl = 'http://localhost:3000/api/users';
  const signUpUrl = 'http://localhost:3000/api/users/new';
  const mockFavoriteMovies = [{ id: 1, movie_title: 'Avengers Infinity War' }]
  const mockEvent = {
    target: {
      name: 'name',
      value: 'Nim'
    },
    preventDefault: () => {}
  }
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
  const mockDispatch = jest.fn(); 
  const mockSignInUser = jest.fn();
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

  it('should set state user input', () => {
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state().name).toEqual('Nim');
  })

  it('should submitUserData if login inputs are valid', () => {
    wrapper = shallow(
      < LoginPage 
        currentUser={ mockCurrentUser }
        formType={ mockLoginFormType }  />
    )
    let submitUserDataSpy = jest.spyOn(wrapper.instance(), 'submitUserData')
    wrapper.setState({...mockUserInput });
    wrapper.instance().handleSubmit(mockEvent);
    expect(submitUserDataSpy).toHaveBeenCalledTimes(1);
  })

  it('should submitUserData if signup inputs are valid', () => {
    wrapper = shallow(
      < LoginPage 
        currentUser={ mockCurrentUser }
        formType={ mockSignUpFormType }  />
    )
    let submitUserDataSpy = jest.spyOn(wrapper.instance(), 'submitUserData')
    wrapper.setState({...mockUserInput });
    wrapper.instance().handleSubmit(mockEvent);
    expect(submitUserDataSpy).toHaveBeenCalledTimes(1);
  })

  it('should setState passwordMismatch true if inputs invalid', () => {
    wrapper = shallow(
      < LoginPage 
        currentUser={mockCurrentUser} 
        formType={ mockSignUpFormType }/>
    )
    wrapper.setState({ password: '1234', confirmPassword: '12' });
    wrapper.instance().handleSubmit(mockEvent);
    expect(wrapper.state().passwordMismatch).toEqual(true);
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

  describe('mapStateToProps', () => {
    const mockState = {
      formType: 'login',
      currentUser: {
        id: 1,
        email: 'nim@sum.com', 
        name: 'Nim',
        favorites: mockFavoriteMovies
      }
    }
    it('should return a formType and current user object', () => {
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(mockState);
    })
  })

  describe('mapDispatchToProps', () => {
    const mockSignIn = {
      id: 1,
      name: 'Nim',
      email: 'nim@sum.com',
      favorites: []
    }
    const { id, name, email, favorites } = mockSignIn;
    it('should dispatch when using a function from MDTP', () => {
      const dispatchSignInUser = currentUser(id, name, email, favorites)
      const dispatchChangeForm = formType('login')
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.signInUser(mockSignIn);
      expect(mockDispatch).toHaveBeenCalledWith(dispatchSignInUser);
      mappedProps.changeForm('login');
      expect(mockDispatch).toHaveBeenCalledWith(dispatchChangeForm);
    })
  })

  it.skip('should trigger submit form on click', () => {
    const userInputs = {
      password: '123',
      email: 'nim@sum.com',
      confirmPassword: '1223',
      userName: 'Nim'
    }
    wrapper = shallow(
      < LoginPage 
      currentUser={ userInputs }
      formType={ mockSignInUser } />
      )
    wrapper.find('#form-submit-btn').simulate('click');
    expect(wrapper.state().passwordMismatch).toEqual(true);
  })

  it.skip('should trigger signup form change on click', () => {
    wrapper = shallow(
      < LoginPage 
      currentUser={ mockCurrentUser }
      changeForm={ mockDispatch } />
      )
    wrapper.setState({ error: true })
    wrapper.find('.signup-link').simulate('click')
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

    it('should dispatch signInUser action correct params with login formType', async () => {
      wrapper = shallow(
        < LoginPage 
          currentUser={ mockCurrentUser }
          formType={ mockLoginFormType }
          signInUser={ mockSignInUser }  />
      )
      wrapper.setState({...mockUserInput })
      postUser.mockImplementation(() => ({
        data: {
          id: 1,
          email: 'nim@sum.com', 
          name: 'Nim'
        }
      }))
      await wrapper.instance().submitUserData();
      await expect(mockSignInUser).toHaveBeenCalledWith({
        id: 1,
        email: 'nim@sum.com', 
        name: 'Nim',
        favorites: mockFavoriteMovies
      })
    })

    it('should dispatch signInUser action correct params with signup formType', async () => {
      wrapper = shallow(
        < LoginPage 
          currentUser={ mockCurrentUser }
          formType={ mockSignUpFormType }
          signInUser={ mockSignInUser }  />
      )
      wrapper.setState({...mockUserInput })
      postUser.mockImplementation(() => ({ id: 1 }))
      await wrapper.instance().submitUserData();
      await expect(mockSignInUser).toHaveBeenCalledWith({
        id: 1,
        email: 'nim@sum.com', 
        name: 'Nim',
        favorites: []
      })
    })

    it('should setState error true if login/signup fails', async () => {
      postUser.mockImplementation(() => (Promise.reject()))
      await wrapper.instance().submitUserData();
      await expect(wrapper.state().error).toEqual(true)
    })

    it('should setState error false if login/signup is good', async () => {
      wrapper = shallow(
        < LoginPage 
        currentUser={ mockCurrentUser }
        formType={ mockSignUpFormType }
        signInUser={ mockSignInUser }  />
        )
      wrapper.setState({...mockUserInput, error: true });
      postUser.mockImplementation(() => Promise.resolve({}))
      await wrapper.instance().submitUserData();
      await expect(wrapper.state().error).toEqual(false)
    })
  })
})