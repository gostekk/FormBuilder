import { connect } from 'react-redux';
import * as formsActions from '../actions/forms';
import BuilderForm from '../components/BuilderForm';

export const mapStateToProps = (state) => {
  return {
    forms: state.forms.forms,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addSubInput: (formId, formType) => dispatch(formsActions.addSubInput(formId, formType)),
    editForm: (id, updates) => dispatch(formsActions.editForm(id, updates)),
    editType: (id, type) => dispatch(formsActions.editType(id, type)),
    removeForm: (id) => dispatch(formsActions.removeForm(id)),
  }
}

const BuilderFormContainer = connect(mapStateToProps,mapDispatchToProps)(BuilderForm);
export default BuilderFormContainer;