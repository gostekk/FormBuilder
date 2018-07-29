import React from "react";
import { shallow } from "enzyme";
import BuilderFormContainer from "../../containers/BuilderForm";
import { forms, fullState } from "../fixtures/forms";
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

describe('BuilderForm', () => {
  let wrapper, store;
  const state = { forms: fullState };

  beforeEach(() => {
    store = mockStore(state);
    store.dispatch = jest.fn();
    wrapper = shallow(<BuilderFormContainer store={store} {...forms[0]}/>).dive();
  });

  test("should render BuilderForm component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render BuilderForm component", () => {
    wrapper = shallow(<BuilderFormContainer store={store} {...forms[1]}/>).dive();
    expect(wrapper).toMatchSnapshot();
  });

  test("should click button and call addSubInput function", () => {
    wrapper.find("button").at(0).simulate("click");
    expect(store.dispatch).toHaveBeenCalled();
  });

  test("should click button and call removeForm function", () => {
    wrapper.find("button").at(1).simulate("click");
    expect(store.dispatch).toHaveBeenCalled();
  });

});