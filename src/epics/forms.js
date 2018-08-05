import { ofType } from "redux-observable";
import { map } from 'rxjs/operators';
import { myDB } from '../store/indexedDB';

// EDIT_FORM_REQUEST
export const editFormEpic = (action$, state$) => action$.pipe(
  ofType("EDIT_FORM_REQUEST"),
  map(action => {
    myDB.update(action.formId, action.updates);
    let newState = state$.value.forms.forms.map(form => form.id === action.formId
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
      if (form.id === action.formId) {
        myDB.update(action.formId, {type: action.formType});
        return { ...form, type: action.formType };
      } else if (form.parentId === action.formId) {
        if (action.formType === 'text') {
          myDB.update(form.id, { conditionType: 'eq', conditionValue: "" });
          return { ...form, conditionType: 'eq', conditionValue: "" };
        } else if (action.formType === 'number') {
          myDB.update(form.id, { conditionType: 'eq', conditionValue: 0 });
          return { ...form, conditionType: 'eq', conditionValue: 0 };
        } else {
          myDB.update(form.id, { conditionType: 'eq', conditionValue: 'yes' });
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
    newState.filter(({ id }) => id !== action.id);
    myDB.delete(action.id);
    const filterElement = (elementId) => {
      myDB.delete(elementId);
      newState = newState.filter(({ id }) => id !== elementId)
    }

    const childFind = (childId) => {
      filterElement(childId);
      newState.find(({ id, parentId}) => childId === parentId
      ? childFind(id)
      : undefined
      )
    }
    
    childFind(action.id);
    return ({type: "REMOVE_FORM_SUCCESS", newState});
  })
);