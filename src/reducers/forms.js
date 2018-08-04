// Forms Reducer

export const formsDefaultState = {
  forms: [],
  error: null
};

const formsReducer = (state = formsDefaultState, action) => {
  switch (action.type) {
    case "FETCH_FORMS_REQUEST":
      return {
        ...state,
        forms: state.forms,
        error: null
      };
    case "FETCH_FORMS_SUCCESS":
      return {
        ...state,
        forms: action.forms,
        error: null
      };
    case "ADD_NEW_FORM_REQUEST":
      return {
        ...state,
        forms: state.forms,
        error: null
      };
    case "ADD_NEW_FORM_SUCCESS":
      return {
        ...state,
        forms: [...state.forms, { id: action.id, parentId: undefined, question: "", type: "text"}],
        error: null
      };
    case "ADD_SUB_INPUT_REQUEST":
      return {
        ...state,
        forms: state.forms,
        error: null
      };
    case "ADD_SUB_INPUT_SUCCESS":
      return {
        ...state,
        forms: [...state.forms, { id: action.subFormId, parentId: action.formId, question: "", type: "text", conditionType: 'eq', conditionValue: "" }],
        error: null
      };
    case "EDIT_FORM_REQUEST":
      return {
        ...state,
      };
    case "EDIT_FORM_SUCCESS":
      return {
        ...state,
        forms: action.newState,
        error: null
      };
    case "EDIT_TYPE_REQUEST":
      return {
        ...state,
      };
    case "EDIT_TYPE_SUCCESS":
      return {
        ...state,
        forms: action.newState,
        error: null
      };
    case "REMOVE_FORM_REQUEST":
      return {
        ...state,
      };
    case "REMOVE_FORM_SUCCESS":
      return {
        ...state,
        forms: action.newState,
        error: null
      };
    default:
      return state;
  }
};


export default formsReducer;
