import shortid from "short-id";
import { myDB } from '../store/indexedDB';

// FORMS
export const fetchForms = () => {
  return dispatch => {
    dispatch(fetchFormsRequest())
    myDB.getAll()
    .then(val => {
      dispatch(fetchFormsSuccess(val));
    });
  };
};

// FETCH_FORMS_REQUEST
export const fetchFormsRequest = () => ({
  type: "FETCH_FORMS_REQUEST"
});

// FETCH_FORMS_SUCCESS
export const fetchFormsSuccess = (forms) => ({
  type: "FETCH_FORMS_SUCCESS",
  forms
});

// ADD_NEW_FORM
export const addNewForm = () => {
  const id = shortid.generate();
  return dispatch => {
    dispatch(addNewFormRequest());
    myDB.addForm({ id: id, parentId: undefined, question: "", type: 'text'})
      .then(() => dispatch(addNewFormSuccess(id)));
  };
};

// ADD_NEW_FORM_REQUEST
export const addNewFormRequest = () => ({
  type: "ADD_NEW_FORM_REQUEST",
});

// ADD_NEW_FORM_SUCCESS
export const addNewFormSuccess = (id) => ({
  type: "ADD_NEW_FORM_SUCCESS",
  id
});

// ADD_SUB_INPUT
export const addSubInput = (formId) => {
  const subFormId = shortid.generate();
  return dispatch => {
    dispatch(addSubInputRequest());
    myDB.addForm({ id: subFormId, parentId: formId, question: "", type: 'text', conditionType: 'eq', conditionValue: "" })
      .then(() => dispatch(addSubInputSuccess(formId, subFormId)));
  }
};

// ADD_SUB_INPUT_REQUEST
export const addSubInputRequest = () => ({
  type: "ADD_SUB_INPUT_REQUEST"
});

// ADD_SUB_INPUT_SUCCESS
export const addSubInputSuccess = (formId, subFormId) => ({
  type: "ADD_SUB_INPUT_SUCCESS",
  formId,
  subFormId
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
export const removeForm = (id) => {
  return dispatch => dispatch(removeFormRequest(id));
};

// REMOVE_FORM_REQUEST
export const removeFormRequest = (id) => ({
  type: "REMOVE_FORM_REQUEST",
  id
});