import { connect } from 'react-redux';
import * as formsActions from '../actions/forms';
import BuilderForm from '../components/BuilderForm';

export const mapStateToProps = (state,ownProps) => {
  return {
    forms: state.forms.forms,
    ...ownProps
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addSubInput: (formId) => dispatch(formsActions.addSubInput(formId)),
    editForm: (id, updates) => dispatch(formsActions.editForm(id, updates)),
    removeForm: (id) => dispatch(formsActions.removeForm(id)),
  }
}

const BuilderFormContainer = connect(mapStateToProps,mapDispatchToProps)(BuilderForm);
export default BuilderFormContainer;