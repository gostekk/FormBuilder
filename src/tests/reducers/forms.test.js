import formsReducer, { formsDefaultState } from "../../reducers/forms";
import { forms, fullState } from "../fixtures/forms";

// DEFAULT
test("should set default state", () => {
  const state = formsReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual(formsDefaultState);
});

// FETCH_FORMS_REQUEST
test("should initialize fetchFormsRequest", () => {
  const action = {
    type: "FETCH_FORMS_REQUEST"
  };

  const state = formsReducer(fullState, action);

  expect(state).toEqual({ 
    forms: [...forms],
    error: null
  });
});

// ADD_NEW_FORM_REQUEST
test("should initialize addNewFormRequest", () => {
  const action = {
    type: "ADD_NEW_FORM_REQUEST",
    id: forms[0]._id
  };

  const state = formsReducer(undefined, action);

  expect(state).toEqual({ 
    forms: [{ _id: forms[0]._id, parentId: undefined, question: "", type: undefined }],
    error: null
  });
});

// ADD_SUB_INPUT_REQUEST
test("should initialize addSubInputRequest", () => {
  const action = {
    type: "ADD_SUB_INPUT_REQUEST",
    subFormId: forms[0]._id,
    formId: forms[1]._id
  };

  const state = formsReducer(undefined, action);

  expect(state).toEqual({ 
    forms: [{ _id: forms[0]._id, parentId: forms[1]._id, question: "", type: undefined, conditionType: 'eq', conditionValue: undefined }],
    error: null
  });
});

// EDIT_FORM_REQUEST
test("should initialize editFormRequest", () => {
  const action = {
    type: "EDIT_FORM_REQUEST",
    formId: forms[0]._id,
    updates: { ...forms[1], _id: forms[0]._id }
  };

  const state = formsReducer({forms: [forms[0]], error: null}, action);

  expect(state).toEqual({ 
    forms: [{ ...forms[1], _id: forms[0]._id }],
    error: null
  });
});

// REMOVE_FORM_REQUEST
test("should removeFormRequest", () => {
  const action = {
    type: "REMOVE_FORM_REQUEST",
    _id: forms[0]._id
  };

  const state = formsReducer({...fullState}, action);

  expect(state).toEqual({ 
    forms: [forms[6], forms[7]],
    error: null
  });
});