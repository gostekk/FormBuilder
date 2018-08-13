import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
  textarea: {
    width:'100%',
    boxSizing:'border-box',
    maxWidth:'100%',
    resize: 'vertical',
    minHeight: '10em',
    fontSize:'12px',
    lineHeight:'1.5',
    padding:'15px 15px 30px',
    borderRadius:'3px',
    border:'1px solid #F7E98D',
    transition:'box-shadow 0.5s ease',
    boxShadow:'0 4px 6px rgba(0,0,0,0.1)',
    background:'linear-gradient(#F9EFAF, #F7E98D)',
  },
  button: {
    width: '230px',
    float: 'right',
    margin: theme.spacing.unit,
    borderRadius: 3,
    border: 0,
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  success: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  default: {
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

export class Export extends PureComponent {
  state = {
    export: JSON.stringify(this.props.forms),
    copied: false,
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <CopyToClipboard text={this.state.export}
          onCopy={() => this.setState({copied: true})}>
          <Button variant="contained" size="small" className={this.state.copied ? classNames(classes.button, classes.success) : classNames(classes.button, classes.default)}>
            <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
            {this.state.copied ? "Successfully copied" : "Copy to clipboard"}
          </Button>
        </CopyToClipboard>
        <textarea className={classes.textarea} rows="10" readOnly value={this.state.export}>
        </textarea>
      </div>
    )
  }
}

Export.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Export);
