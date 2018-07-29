import { shallow, mount, render } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';

import BuilderFormContainer from '../../containers/BuilderForm';
import { forms, fullState } from '../fixtures/forms';

const mockStore = configureStore();

describe('Builder Container', () => {
  let wrapper, store;
  const state = { forms: fullState };

  beforeEach(() => {
    store = mockStore(state);
    store.dispatch = jest.fn();
    wrapper = shallow(<BuilderFormContainer store={store} {...forms[0]}/>);
  });

  test('maps state and dispatch to props', () => {
    expect(wrapper.props()).toEqual(expect.objectContaining({
      forms,
      addSubInput: expect.any(Function),
      editForm: expect.any(Function),
      removeForm: expect.any(Function)
    }));
  });

  test('maps addSubInput to dispatch action', () => {
    wrapper.props().addSubInput();

    expect(store.dispatch).toHaveBeenCalled();
  });

  test('maps editForm to dispatch action', () => {
    wrapper.props().editForm();

    expect(store.dispatch).toHaveBeenCalled();
  });

  test('maps removeForm to dispatch action', () => {
    wrapper.props().removeForm();

    expect(store.dispatch).toHaveBeenCalled();
  });
})