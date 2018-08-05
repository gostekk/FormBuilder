import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import BuilderForm from "../containers/BuilderForm";

export class Builder extends PureComponent {
  componentWillMount() {
    this.props.fetchForms();
  }
  
  render() {
    return (
      <div className="card-body">
        <div className="col-md-12">
          <button onClick={() => this.props.addNewForm()} className="btn btn-success btn-sm btn-block">
            Add input
          </button>
        </div>
        <div className="col-md-12">
          { this.props.forms.length
            ? this.props.forms.map((form) => 
              form.parentId === undefined 
              ? <BuilderForm key={form._id} {...form} />
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
