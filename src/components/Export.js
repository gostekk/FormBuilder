import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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
});

export class Export extends PureComponent {
  state = {
    export: this.props.forms
  };

  componentDidUpdate(params) {
    if (params.forms !== this.props.forms) {
      this.setState({export: this.props.forms});
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <textarea className={classes.textarea} rows="10" readOnly value={JSON.stringify(this.state.export)}>
        </textarea>
      </div>
    )
  }
}

Export.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Export);
