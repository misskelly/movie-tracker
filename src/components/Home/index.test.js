import React from 'react';
import { shallow } from 'enzyme';
import Home from './index'

describe('Home', () => {
  let wrapper = shallow(< Home />)
  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})