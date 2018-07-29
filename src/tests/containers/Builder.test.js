import { shallow, mount, render } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';

import BuilderContainer from '../../containers/Builder';
import { forms, fullState } from '../fixtures/forms';

const mockStore = configureStore();

describe('Builder Container', () => {
  let wrapper, store;
  const state = { forms: fullState };

  beforeEach(() => {
    store = mockStore(state);
    store.dispatch = jest.fn();
    wrapper = shallow(<BuilderContainer store={store}/>);
  });

  test('maps state and dispatch to props', () => {
    expect(wrapper.props()).toEqual(expect.objectContaining({
      forms,
      addNewForm: expect.any(Function)
    }));
  });

  test('maps addNewForm to dispatch action', () => {
    wrapper.props().addNewForm();

    expect(store.dispatch).toHaveBeenCalled();
  });
})