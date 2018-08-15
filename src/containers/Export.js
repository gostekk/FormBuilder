import { connect } from 'react-redux';
import Export from '../components/Export';

export const mapStateToProps = (state) => {
  return {
    forms: state.forms.forms
  }
}

const ExportContainer = connect(mapStateToProps)(Export);
export default ExportContainer;