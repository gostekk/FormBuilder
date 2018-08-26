import * as formsActions from "../../actions/forms";
import { forms } from "../fixtures/forms";

// FORMS

// FETCH_FORMS_REQUEST
test("should setup fetchFormsRequest action", () => {
  const action = formsActions.fetchFormsRequest();

  expect(action).toEqual({
    type: "FETCH_FORMS_REQUEST"
  });
});

// ADD_NEW_FORM

// ADD_NEW_FORM_REQUEST
test("should setup addNewFormRequest", () => {
  const action = formsActions.addNewFormRequest(forms[0].id);

  expect(action).toEqual({
    type: "ADD_NEW_FORM_REQUEST",
  });
});

// ADD_NEW_FORM_SUCCESS
test("should setup addNewFormSuccess", () => {
  const action = formsActions.addNewFormSuccess(forms[0].id);

  expect(action).toEqual({
    type: "ADD_NEW_FORM_SUCCESS",
    id: forms[0].id
  });
});

// ADD_SUB_INPUT

// ADD_SUB_INPUT_REQUEST
test("should setup addSubInputRequest", () => {
  const action = formsActions.addSubInputRequest();

  expect(action).toEqual({
    type: "ADD_SUB_INPUT_REQUEST",
  });
});

// ADD_SUB_INPUT_SUCCESS
test("should setup addSubInputSuccess", () => {
  const id1 = forms[0].id;
  const id2 = forms[1].id;
  const action = formsActions.addSubInputSuccess(id1, id2);

  expect(action).toEqual({
    type: "ADD_SUB_INPUT_SUCCESS",
    formId: id1,
    subFormId: id2 
  });
});

// EDIT_FORM

// EDIT_FORM_REQUEST
test("should setup editFormRequest", () => {
  const id = forms[0].id;
  const updates = { question: "test 123"};
  const action = formsActions.editFormRequest(id, updates);

  expect(action).toEqual({
    type: "EDIT_FORM_REQUEST",
    formId: id,
    updates
  });
});

// REMOVE_FORM

// REMOVE_FORM_REQUEST
test("should setup removeFormRequest", () => {
  const id = forms[0].id;  
  const action = formsActions.removeFormRequest(id);

  expect(action).toEqual({
    type: "REMOVE_FORM_REQUEST",
    id: id
  });
});