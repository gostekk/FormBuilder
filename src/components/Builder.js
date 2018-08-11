import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';

import BuilderForm from "../containers/BuilderForm";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
    right: '2em',
    bottom: '2em',
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)',
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

export class Builder extends PureComponent {
  componentWillMount() {
    this.props.fetchForms();
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <Tooltip title="Add Input">
            <Button variant="fab" color="primary" aria-label="Add" className={classes.button} onClick={() => this.props.addNewForm()}>
              <AddIcon />
            </Button>
          </Tooltip>
        </div>
        <div>
          { this.props.forms.length
            ? this.props.forms.map((form) => 
              form.parentId === undefined 
              ? <BuilderForm key={form.id} {...form} />
              : undefined
            )
            : <div>No inputs added yet!</div>
          }
        </div>
      </div>
    );
  }
};

Builder.propTypes = {
  forms: PropTypes.arrayOf(PropTypes.object),
  addNewForm: PropTypes.func,
  fetchForms: PropTypes.func,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Builder);
