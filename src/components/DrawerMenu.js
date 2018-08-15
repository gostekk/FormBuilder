import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CodeIcon from '@material-ui/icons/Code';
import CreateIcon from '@material-ui/icons/Create';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import FindInPageIcon from '@material-ui/icons/FindInPage';

export class DrawerMenu extends PureComponent {
  componentWillMount() {
    this.props.fetchForms();
  }
  render() {
    const { history } = this.props;

    return (
      <div>
        <Divider />
        <List>
          <ListItem button onClick={() => history.push('/')}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Builder" />
          </ListItem>
          <ListItem button onClick={() => history.push('/preview')}>
            <ListItemIcon>
              <FindInPageIcon />
            </ListItemIcon>
            <ListItemText primary="Preview" />
          </ListItem>
          <ListItem button onClick={() => history.push('/export')}>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="Export" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <DeleteSweepIcon />
            </ListItemIcon>
            <ListItemText primary="Remove all" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withRouter(DrawerMenu);
