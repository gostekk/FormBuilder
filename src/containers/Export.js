import { connect } from 'react-redux';
import * as formsActions from '../actions/forms';
import Export from '../components/Export';

export const mapStateToProps = (state,ownProps) => {
  return {
    forms: state.forms.forms
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchForms: () => dispatch(formsActions.fetchForms()),
  }
}

const ExportContainer = connect(mapStateToProps, mapDispatchToProps)(Export);
export default ExportContainer;