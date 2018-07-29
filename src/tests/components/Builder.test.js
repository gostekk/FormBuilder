import React from "react";
import { shallow } from "enzyme";
import { Builder } from "../../components/Builder";
import { forms } from "../fixtures/forms";

describe('Builder Component', () => {
  let wrapper, addNewForm;

  beforeEach(() => {
    addNewForm = jest.fn();
    wrapper = shallow(<Builder forms={forms} addNewForm={addNewForm} />);
  });

  test("should render Builder component without forms", () => {
    wrapper = shallow(<Builder forms={[]} addNewForm={addNewForm} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should click button and call addNewForm function", () => {
    wrapper.find("button").simulate("click");
    expect(addNewForm).toHaveBeenCalled();
  });
});