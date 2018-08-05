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
export const addSubInput = (formId, formType) => {
  const subFormId = shortid.generate();
  const conditionValue = formType === 'radio' ? 'yes' : formType === 'number' ? 0 : "";
  return dispatch => dispatch(addSubInputRequest(formId, subFormId, conditionValue));
};

// ADD_SUB_INPUT_REQUEST
export const addSubInputRequest = (formId, subFormId, conditionValue) => ({
  type: "ADD_SUB_INPUT_REQUEST",
  formId,
  subFormId,
  conditionValue
});

// EDIT_FORM
export const editForm = (formId, updates) => {
  return dispatch => dispatch(editFormRequest(formId, updates));
};

// EDIT_FORM_REQUEST
export const editFormRequest = (formId, updates) => ({
  type: "EDIT_FORM_REQUEST",
  formId,
  updates
});

// EDIT_TYPE
export const editType = (formId, formType) => {
  return dispatch => dispatch(editTypeRequest(formId, formType));
};

// EDIT_TYPE_REQUEST
export const editTypeRequest = (formId, formType) => ({
  type: "EDIT_TYPE_REQUEST",
  formId,
  formType
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