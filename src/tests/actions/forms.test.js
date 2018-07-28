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
  const action = formsActions.addNewFormRequest(forms[0]._id);

  expect(action).toEqual({
    type: "ADD_NEW_FORM_REQUEST",
    id: forms[0]._id
  });
});

// ADD_SUB_INPUT

// ADD_SUB_INPUT_REQUEST
test("should setup addSubInputRequest", () => {
  const id1 = forms[0]._id;
  const id2 = forms[1]._id;
  const action = formsActions.addSubInputRequest(id1, id2);

  expect(action).toEqual({
    type: "ADD_SUB_INPUT_REQUEST",
    formId: id1,
    subFormId: id2 
  });
});

// EDIT_FORM

// EDIT_FORM_REQUEST
test("should setup editFormRequest", () => {
  const id = forms[0]._id;
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
  const id = forms[0]._id;  
  const action = formsActions.removeFormRequest(id);

  expect(action).toEqual({
    type: "REMOVE_FORM_REQUEST",
    _id: id
  });
});