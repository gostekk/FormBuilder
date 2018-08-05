import { connect } from 'react-redux';
import * as formsActions from '../actions/forms';
import Preview from '../components/Preview';

export const mapStateToProps = (state,ownProps) => {
  return {
    ...ownProps,
    forms: state.forms.forms
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchForms: () => dispatch(formsActions.fetchForms()),
  }
}

const PreviewContainer = connect(mapStateToProps, mapDispatchToProps)(Preview);
export default PreviewContainer;