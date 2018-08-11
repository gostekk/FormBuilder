import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import Tooltip from '@material-ui/core/Tooltip';

import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';

import BuilderFormContainer from '../containers/BuilderForm';

const styles = theme => ({
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '500px',
    border: '1px solid black',
  },
  columnWrapper: {
    display: 'flex',
    flexFlow: 'column wrap'
  },
  childs: {
    marginLeft: '0.5em'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 230,
  },
  button: {
    float: 'right',
    margin: theme.spacing.unit,
  },
  menu: {
    width: 300,
  },
  input: {
    display: 'none',
  },
});

export class BuilderForm extends PureComponent {
  constructor(props) {
    super(props);

    this.onConditionTypeChange = this.onConditionTypeChange.bind(this);
    this.onConditionValueChange = this.onConditionValueChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onQuestionChange = this.onQuestionChange.bind(this);
  }

  state = {
    question: this.props.question,
    conditionType: this.props.conditionType ? this.props.conditionType : 'eq',
    conditionValue: this.props.conditionValue ? this.props.conditionValue
    : this.props.conditionType === 'text' ? ""
    : this.props.conditionType === 'number' ? 0 : this.props.conditionValue,
    type: this.props.type ? this.props.type : 'text',
    parentType: this.props.parentType ? this.props.parentType : 'text'
  };

  conditionOptions = {
    text: [
      { value: 'eq', label: 'Equals' }
    ],
    number: [
    { value: 'eq', label: 'Equals' },
    { value: 'gt', label: 'Greater than' },
    { value: 'lt', label: 'Less than' }
    ],
    radio: [
      { value: 'eq', label: 'Equals' },
    ],
  };

  conditionValue = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ];

  typeOptions = [
    { value: 'text', label: 'Text' },
    { value: 'number', label: 'Number' },
    { value: 'radio', label: 'Radio' }
  ];

  onConditionTypeChange = (e) => {
    this.setState({
      conditionType: e.target.value
    });
    this.props.editForm(this.props.id, { conditionType: e.target.value });
  }

  onConditionValueChange = (e) => {
    this.setState({
      conditionValue: e.target.value
    });
    this.props.editForm(this.props.id, { conditionValue: e.target.value });
  }

  onTypeChange = (e) => {
    if (e.target.value !== this.state.type) {
      this.setState({
        type: e.target.value
      });
      this.props.editType(this.props.id, e.target.value);
    }
  }

  onQuestionChange = (e) => {
    this.setState({
      question: e.target.value
    });
    this.props.editForm(this.props.id, { question: e.target.value });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.question !== this.props.question || nextProps.conditionValue !== this.props.conditionValue) {
      this.setState({
        question: nextProps.question,
        conditionType: nextProps.conditionType,
        conditionValue: nextProps.conditionValue,
        type: nextProps.type,
        parentType: nextProps.parentType
      });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          { this.props.parentId
            ? (
              <div className={classes.conditionType}>
                <TextField
                  id="conditionType"
                  select
                  label="Condition Type"
                  className={classes.textField}
                  value={this.state.conditionType}
                  onChange={this.onConditionTypeChange}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  margin="normal"
                >
                  { this.conditionOptions[this.state.parentType].map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )) }
                </TextField>
              
              </div>)
            : undefined
          }
          { this.props.parentId
            ? (
            <div className={classes.conditionValue}>
              { this.props.parentType === "text"
              ?  <TextField
                  id="conditionValueText"
                  label="Condition Value"
                  className={classes.textField}
                  value={this.state.conditionValue}
                  onChange={this.onConditionValueChange}
                  margin="normal"
                />
              : undefined }
              { this.props.parentType === "number"
              ? <TextField
                  id="conditionValueNumber"
                  label="Condition Value"
                  className={classes.textField}
                  type="number"
                  value={this.state.conditionValue}
                  onChange={this.onConditionValueChange}
                  InputLabelProps={{ shrink: true, }}
                  margin="normal"
                />
              : undefined }
              { this.props.parentType === "radio"
              ? <TextField
                  id="conditionValueRadio"
                  select
                  label="Condition Value"
                  className={classes.textField}
                  value={this.state.conditionValue}
                  onChange={this.onConditionValueChange}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  margin="normal"
                >
                  {this.conditionValue.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              : undefined }
            </div>
            )
          : undefined
          }
          <div className={classes.question}>
            <TextField
              id="question"
              label="Question"
              multiline
              rowsMax="4"
              className={classes.textField}
              value={this.state.question}
              onChange={this.onQuestionChange}
              margin="normal"
            />
          </div>
          <div className={classes.columnWrapper}>
            <div className={classes.type}>
              <TextField
                id="type"
                select
                label="Type"
                className={classes.textField}
                value={this.state.type}
                onChange={this.onTypeChange}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                margin="normal"
              >
                {this.typeOptions.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className={classes.buttons}>
              <Tooltip title="Delete">
                <IconButton className={classes.button} aria-label="Delete" onClick={() => this.props.removeForm(this.props.id)}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Add SubInput">
                <IconButton className={classes.button} aria-label="AddSubInput" onClick={() => this.props.addSubInput(this.props.id, this.props.type)}>
                  <AddCircleIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </form>
        <div className={classes.childs}>
          { this.props.forms.map((form, index) =>  
              form.parentId === this.props.id 
              ? (<div key={form.id}>
                  <BuilderFormContainer {...form} parentType={this.props.type} />
                </div>)
              : undefined
            )
          }
        </div>
      </div>
    );
  }
}

BuilderForm.propTypes = {
  forms: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  question: PropTypes.string.isRequired,
  conditionType: PropTypes.string,
  conditionValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  addSubInput: PropTypes.func.isRequired,
  editForm: PropTypes.func.isRequired,
  removeForm: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BuilderForm);
