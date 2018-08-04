import { ofType } from "redux-observable";
import { map } from 'rxjs/operators';

// EDIT_FORM_REQUEST
export const editFormEpic = (action$, state$) => action$.pipe(
  ofType("EDIT_FORM_REQUEST"),
  map(action => {
    let newState = state$.value.forms.forms.map(form => form._id === action.formId
      ? { ...form, ...action.updates }
      : form );

    return ({type: "EDIT_FORM_SUCCESS", newState});
  })
);

// EDIT_TYPE_REQUEST
export const editTypeEpic = (action$, state$) => action$.pipe(
  ofType("EDIT_TYPE_REQUEST"),
  map(action => {
    let newState = state$.value.forms.forms.map(form => {
      if (form._id === action.formId) {
        return { ...form, type: action.formType };
      } else if (form.parentId === action.formId) {
        if (action.formType === 'text') {
          return { ...form, conditionType: 'eq', conditionValue: "" };
        } else if (action.formType === 'number') {
          return { ...form, conditionType: 'eq', conditionValue: 0 };
        } else {
          return { ...form, conditionType: 'eq', conditionValue: 'yes' };
        }
      } else {
        return form;
      }
    });

    return ({type: "EDIT_TYPE_SUCCESS", newState});
  })
);

// REMOVE_FORM_REQUEST
export const removeFormEpic = (action$, state$) => action$.pipe(
  ofType("REMOVE_FORM_REQUEST"),
  map(action => {
    let newState = state$.value.forms.forms;
    newState.filter(({ _id }) => _id !== action._id);

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
    
    childFind(action._id);
    return ({type: "REMOVE_FORM_SUCCESS", newState});
  })
);