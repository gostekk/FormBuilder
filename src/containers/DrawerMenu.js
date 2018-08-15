import { connect } from 'react-redux';
import * as formsActions from '../actions/forms';
import DrawerMenu from '../components/DrawerMenu';

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchForms: () => dispatch(formsActions.fetchForms()),
  }
}

const DrawerMenuContainer = connect(null, mapDispatchToProps)(DrawerMenu);
export default DrawerMenuContainer;