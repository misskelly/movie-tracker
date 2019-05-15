//changes the formType depending on the link clicked
//
import React from 'react';
import { shallow } from 'enzyme'
import { Header, mapStateToProps, mapDispatchToProps } from '../Header';
import { mockUser } from '../../utils/mockData'
import { formType, currentUser, showFavorites }  from '../../actions/index'

jest.mock('../../actions/index')

describe('Header', () => {
  let wrapper;
  let mockFormType = jest.fn();
  let mockLogOutUser;
  let mockShowFavorites = jest.fn(); 
  let mockTextContent = 'Log-in'
  const mockEvent = {
    target: { textContent: mockTextContent },
  }
  beforeEach(() => {
    wrapper = shallow(
      <Header 
        currentUser={mockUser}
        formType={mockFormType}
        logOutUser={mockLogOutUser}
        showFavorites={mockShowFavorites}
        />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handleClick', () => {
    wrapper.find('.header').simulate('click', mockEvent);
    expect(mockShowFavorites).toHaveBeenCalledWith(false);
  })

  describe('mapStateToProps', () => {
    const mockState = {
      currentUser: { name: 'Nim', email: 'nim@sum.com' }
    }
    expect(mapStateToProps(mockState)).toEqual(mockState)
  })

  describe('mapDispatchToProps', () => {
    let mockDispatch = jest.fn();
    const dispatchFormType = formType('login');
    const dispatchCurrUser = currentUser();
    const dispatchShowFavs = showFavorites(true);
    const dispatched = mapDispatchToProps(mockDispatch);
    dispatched.formType(dispatchFormType);
    expect(mockDispatch).toHaveBeenCalledWith(dispatchFormType);
    dispatched.formType(dispatchCurrUser);
    expect(mockDispatch).toHaveBeenCalledWith(dispatchCurrUser);
    dispatched.formType(dispatchShowFavs);
    expect(mockDispatch).toHaveBeenCalledWith(dispatchShowFavs);
    
  })
});
