import { combineEpics } from 'redux-observable';
import * as epicForms from '../epics/forms';

export const rootEpic = combineEpics(
  epicForms.editFormEpic,
  epicForms.removeFormEpic
);