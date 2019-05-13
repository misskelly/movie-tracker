import React from 'react';
import { LoginPage, mapStateToProps, mapDispatchToProps } from './index';
import { shallow } from 'enzyme';

import { postUser } from '../../utils/apiFetches/postUser';
import { fetchAnything } from '../../utils/apiFetches/fetchAnything';
import { currentUser, formType } from '../../actions';
import { Redirect } from 'react-router-dom';

describe('LoginPage', () => {
  
})