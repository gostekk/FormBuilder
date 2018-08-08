import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import PreviewChildContainer from '../containers/PreviewChild';

export class PreviewChild extends PureComponent {
  constructor(props) {
    super(props);

    this.onAnswerChange = this.onAnswerChange.bind(this);
  }

  state = {
    answer: this.props.type === 'number' ? 0 : "",
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
    return ( (this.props.parentValue === this.props.conditionValue && this.props.parentType !== 'number')
      || (this.props.parentType === 'number' && this.props.conditionType === 'eq' && Number(this.props.conditionValue) === Number(this.props.parentValue)) 
      || (this.props.parentType === 'number' && this.props.conditionType === 'gt' && Number(this.props.conditionValue) < Number(this.props.parentValue)) 
      || (this.props.parentType === 'number' && this.props.conditionType === 'lt' && Number(this.props.conditionValue) > Number(this.props.parentValue))
      ?
      <div>
      <form>
        <div>
          <div>
            <div>
              <label htmlFor="question">{this.props.question}</label>
            </div>
            <div>
              { this.props.type === "text"
              ? <input type="text" id="answerValue" onChange={this.onAnswerChange} value={this.state.answer} />
              : undefined }
              { this.props.type === "number"
              ? <input type="number" id="answerValue" onChange={this.onAnswerChange} value={this.state.answer} />
              : undefined }
              { this.props.type === "radio"
              ? <Select placeholder={this.state.answer} value={this.state.answer} onChange={this.onAnswerChange} options={this.radioOptions} />
              : undefined }
            </div>
          </div>
        </div>
      </form>
      { this.props.forms.map(form =>  
          form.parentId === this.props.id 
          ? (<div key={form.id}>
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
}

export default PreviewChild;
