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
    case "ADD_NEW_FORM_REQUEST":
      return {
        ...state,
        forms: [...state.forms, { _id: action.id, parentId: undefined, question: "", type: undefined}],
        error: null
      };
    case "ADD_SUB_INPUT_REQUEST":
      return {
        ...state,
        forms: [...state.forms, { _id: action.subFormId, parentId: action.formId, question: "", type: undefined, conditionType: 'eq', conditionValue: undefined }],
        error: null
      };
    case "EDIT_FORM_REQUEST":
      const updatedForms = state.forms.map(form => form._id === action.formId
      ? {
            ...form,
            ...action.updates
        }
      : form
      );
      return {
        ...state,
        forms: updatedForms,
        error: null
      };
    case "REMOVE_FORM_REQUEST":
      const filteredForms = filterState(state.forms, action._id);
      return {
        ...state,
        forms: filteredForms,
        error: null
      };
    default:
      return state;
  }
};

export const filterState = (state, formId) => {
  let newState = state.filter(({ _id }) => _id !== formId);

  const filterElement = (id) => {
    newState = newState.filter(({ _id }) => _id !== id)
  }

  const childFind = (id) => {
    filterElement(id);
    newState.find(({ _id, parentId}) => id === parentId
    ? childFind(_id)
    : undefined
    )
  }
  
  childFind(formId);
  return newState;
}



export default formsReducer;
