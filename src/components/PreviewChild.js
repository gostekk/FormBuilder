import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import PreviewChildContainer from '../containers/PreviewChild';

const styles = theme => ({
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '500px',
    border: '1px solid black',
  },
  childs: {
    marginLeft: '0.5em'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 480,
  },
  menu: {
    width: 300,
  },
});


export class PreviewChild extends PureComponent {
  constructor(props) {
    super(props);

    this.onAnswerChange = this.onAnswerChange.bind(this);
  }

  state = {
    answer: this.props.type === 'number' ? 0 : "",
    question: this.props.question ? this.props.question : "Not specified"
  };

  radioOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ];

  onAnswerChange (e) {
    if (e.target) {
      this.setState({ answer: e.target.value });
    } else {
      this.setState({ answer: e.value });
    }
  }

  render() {
    const { classes } = this.props;

    return ( (this.props.parentValue === this.props.conditionValue && this.props.parentType !== 'number')
      || (this.props.parentType === 'number' && this.props.conditionType === 'eq' && Number(this.props.conditionValue) === Number(this.props.parentValue)) 
      || (this.props.parentType === 'number' && this.props.conditionType === 'gt' && Number(this.props.conditionValue) < Number(this.props.parentValue)) 
      || (this.props.parentType === 'number' && this.props.conditionType === 'lt' && Number(this.props.conditionValue) > Number(this.props.parentValue))
      ?
      <div>
      <form className={classes.container} noValidate autoComplete="off">
        <div>
          <TextField
            id="question"
            label="Question"
            error={!this.props.question}
            value={this.state.question}
            className={classes.textField}
            margin="normal"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <div>
          { this.props.type === "text"
          ? <TextField
              id="textAnswerValue"
              label="Answer"
              className={classes.textField}
              value={this.state.answer}
              onChange={this.onAnswerChange}
              margin="normal"
            />
          : undefined }
          { this.props.type === "number"
          ? <TextField
              id="numberAnswerValue"
              label="Answer"
              className={classes.textField}
              type="number"
              value={this.state.answer}
              onChange={this.onAnswerChange}
              InputLabelProps={{ shrink: true, }}
              margin="normal"
            />
          : undefined }
          { this.props.type === "radio"
          ? <TextField
              id="radioAnswerValue"
              select
              label="Answer"
              className={classes.textField}
              value={this.state.answer}
              onChange={this.onAnswerChange}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              margin="normal"
            >
              { this.radioOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              )) }
            </TextField>
          : undefined }
        </div>
      </form>
      { this.props.forms.map(form =>  
          form.parentId === this.props.id 
          ? (<div key={form.id} className={classes.childs}>
              <PreviewChildContainer {...form} parentType={this.props.type} parentValue={this.state.answer} />
            </div>)
          : undefined
        )
      }
      </div>
    : null);
  }
}

PreviewChild.propTypes = {
  forms: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  question: PropTypes.string.isRequired,
  conditionType: PropTypes.string,
  conditionValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  parentType: PropTypes.string,
  parentValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PreviewChild);
