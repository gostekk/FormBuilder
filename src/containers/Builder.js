import { connect } from 'react-redux';
import * as formsActions from '../actions/forms';
import Builder from '../components/Builder';

export const mapStateToProps = (state,ownProps) => {
  return {
    forms: state.forms.forms
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addNewForm: () => dispatch(formsActions.addNewForm()),
    fetchForms: () => dispatch(formsActions.fetchForms()),
  }
}

const BuilderContainer = connect(mapStateToProps,mapDispatchToProps)(Builder);
export default BuilderContainer;