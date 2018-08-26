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
    forms: fullState.forms,
    error: null
  });
});

// ADD_NEW_FORM_REQUEST
test("should initialize addNewFormRequest", () => {
  const action = {
    type: "ADD_NEW_FORM_REQUEST",
    id: forms[0].id
  };

  const state = formsReducer(undefined, action);

  expect(state).toEqual({ 
    forms: [],
    error: null
  });
});

// ADD_NEW_FORM_SUCCESS
test("should initialize addNewFormSuccess", () => {
  const action = {
    type: "ADD_NEW_FORM_SUCCESS",
    id: forms[0].id
  };

  const state = formsReducer(undefined, action);

  expect(state).toEqual({ 
    forms: [{ id: forms[0].id, parentId: undefined, question: "", type: "text" }],
    error: null
  });
});

// ADD_SUB_INPUT_REQUEST
test("should initialize addSubInputRequest", () => {
  const action = {
    type: "ADD_SUB_INPUT_REQUEST",
  };

  const state = formsReducer(undefined, action);

  expect(state).toEqual({ 
    forms: [],
    error: null
  });
});

// ADD_SUB_INPUT_SUCCESS
test("should initialize addSubInputSuccess", () => {
  const action = {
    type: "ADD_SUB_INPUT_SUCCESS",
    subFormId: forms[0].id,
    formId: forms[1].id
  };

  const state = formsReducer(undefined, action);

  expect(state).toEqual({ 
    forms: [{ id: forms[0].id, parentId: forms[1].id, question: "", type: "text", conditionType: 'eq', conditionValue: undefined }],
    error: null
  });
});

// EDIT_FORM_REQUEST
test("should initialize editFormRequest", () => {
  const action = {
    type: "EDIT_FORM_REQUEST",
    formId: forms[0].id,
    updates: { ...forms[1], id: forms[0].id }
  };

  const state = formsReducer({forms: [forms[0]], error: null}, action);

  expect(state).toEqual({ 
    forms: [forms[0]],
    error: null
  });
});

// EDIT_FORM_SUCCESS
test("should initialize editFormSuccess", () => {
  const action = {
    type: "EDIT_FORM_SUCCESS",
    newState: [{ ...forms[1], id: forms[0].id }]
  };

  const state = formsReducer({forms: [forms[0]], error: null}, action);

  expect(state).toEqual({ 
    forms: [{ ...forms[1], id: forms[0].id }],
    error: null
  });
});

// REMOVE_FORM_REQUEST
test("should removeFormRequest", () => {
  const action = {
    type: "REMOVE_FORM_REQUEST",
  };

  const state = formsReducer({...fullState}, action);

  expect(state).toEqual({ 
    forms: fullState.forms,
    error: null
  });
});

// REMOVE_FORM_SUCCESS
test("should removeFormSuccess", () => {
  const action = {
    type: "REMOVE_FORM_SUCCESS",
    newState: [forms[6], forms[7]]
  };

  const state = formsReducer({...fullState}, action);

  expect(state).toEqual({ 
    forms: [forms[6], forms[7]],
    error: null
  });
});