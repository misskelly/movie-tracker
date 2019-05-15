//changes the formType depending on the link clicked
//
import React from 'react';
import { shallow } from 'enzyme'
import { Header, mapStateToProps, mapDispatchToProps } from '../Header';
import { mockUser } from '../../utils/mockData'


describe('Header', () => {
  let wrapper;
  let mockFormType;
  let mockLogOutUser;
  let mockShowFavorites;
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
});
