import shortid from "short-id";

// FORMS
export const fetchForms = () => {
  return dispatch => dispatch(fetchFormsRequest());
};

// FETCH_FORMS_REQUEST
export const fetchFormsRequest = () => ({
  type: "FETCH_FORMS_REQUEST"
});

// ADD_NEW_FORM
export const addNewForm = () => {
  const id = shortid.generate();
  return dispatch => dispatch(addNewFormRequest(id));
};

// ADD_NEW_FORM_REQUEST
export const addNewFormRequest = (id) => ({
  type: "ADD_NEW_FORM_REQUEST",
  id
});

// ADD_SUB_INPUT
export const addSubInput = (formId) => {
  const subFormId = shortid.generate();
  return dispatch => dispatch(addSubInputRequest(formId, subFormId));
};

// ADD_SUB_INPUT_REQUEST
export const addSubInputRequest = (formId, subFormId) => ({
  type: "ADD_SUB_INPUT_REQUEST",
  formId,
  subFormId
});

// EDIT_FORM
export const editForm = (formId, updates) => {
  return dispatch => dispatch(editFormRequest(formId, updates))
};

// EDIT_FORM_REQUEST
export const editFormRequest = (formId, updates) => ({
  type: "EDIT_FORM_REQUEST",
  formId,
  updates
});

// REMOVE_FORM
export const removeForm = (_id) => {
  return dispatch => dispatch(removeFormRequest(_id));
};

// REMOVE_FORM_REQUEST
export const removeFormRequest = (_id) => ({
  type: "REMOVE_FORM_REQUEST",
  _id
});