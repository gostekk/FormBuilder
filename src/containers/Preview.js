import { connect } from 'react-redux';
import Preview from '../components/Preview';

export const mapStateToProps = (state,ownProps) => {
  return {
    ...ownProps,
    forms: state.forms.forms
  }
}

const PreviewContainer = connect(mapStateToProps)(Preview);
export default PreviewContainer;