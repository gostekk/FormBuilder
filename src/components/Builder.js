import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import BuilderForm from "../containers/BuilderForm";

export class Builder extends PureComponent {
  componentWillMount() {
    this.props.fetchForms();
  }
  
  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.props.addNewForm()}>
            Add input
          </button>
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
  fetchForms: PropTypes.func
}

export default Builder;
