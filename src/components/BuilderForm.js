import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import BuilderFormContainer from '../containers/BuilderForm';

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
    this.props.editForm(this.props.id, { conditionType: e.value });
  }

  onConditionValueChange = (e) => {
    if (e.target) {
      this.props.editForm(this.props.id, { conditionValue: e.target.value });
    } else {
      this.props.editForm(this.props.id, { conditionValue: e.value });
    }
  }

  onTypeChange = (e) => {
    if (e.value !== this.props.type) {
      this.props.editType(this.props.id, e.value);
    }
  }

  onQuestionChange = (e) => {
    this.props.editForm(this.props.id, { question: e.target.value });
  }

  render() {
    return (
      <div>
      <form>
        <div>
          { this.props.parentId
            ? (<div>
              <label htmlFor="condition">Condition</label>
              <div>
                <Select placeholder={this.props.conditionType} value={this.props.conditionType} onChange={this.onConditionTypeChange} options={this.conditionOptions[this.props.parentType]}/>
              </div>
              <div>
                { this.props.parentType === "text"
                ? <input type="text" id="conditionValue" onChange={this.onConditionValueChange} value={this.props.conditionValue ? this.props.conditionValue : ""} />
                : undefined }
                { this.props.parentType === "number"
                ? <input type="number" id="conditionValue" onChange={this.onConditionValueChange} value={this.props.conditionValue ? this.props.conditionValue : 0} />
                : undefined }
                { this.props.parentType === "radio"
                ? <Select placeholder={this.props.conditionValue} value={this.props.conditionValue} onChange={this.onConditionValueChange} options={this.conditionValue} />
                : undefined }
              </div>
            </div>)
          : undefined
          }
          <div>
            <label htmlFor="question">Question</label>
            <div>
              <input type="text" id="question" onChange={this.onQuestionChange} value={this.props.question} />
            </div>
          </div>
          <div>
            <label>Type</label>
            <div>
              <Select placeholder={this.props.type} value={this.props.type} onChange={this.onTypeChange} options={this.typeOptions}/>
            </div>
          </div>
          <div>
            <button type="button" onClick={() => this.props.addSubInput(this.props.id, this.props.type)}>Add Sub-Input</button>
            <button type="button" onClick={() => this.props.removeForm(this.props.id)}>Delete</button>
          </div>
        </div>
      </form>
      { this.props.forms.map((form, index) =>  
          form.parentId === this.props.id 
          ? (<div key={form.id}>
              <BuilderFormContainer {...form} parentType={this.props.type} />
            </div>)
          : undefined
        )
      }
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
  removeForm: PropTypes.func.isRequired
}

export default BuilderForm;
