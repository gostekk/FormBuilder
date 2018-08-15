import { connect } from 'react-redux';
import PreviewChild from '../components/PreviewChild';

export const mapStateToProps = (state) => {
  return {
    forms: state.forms.forms
  }
}

const PreviewChildContainer = connect(mapStateToProps)(PreviewChild);
export default PreviewChildContainer;