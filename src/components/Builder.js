import React from "react";
import PropTypes from "prop-types";

import BuilderForm from "../containers/BuilderForm";

export class Builder extends React.Component {
  render() {
    return (
    <div className="container">
      <div className="card bg-light mb-3">
      <div className="card-header">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">FormsBuilder</h1>
            </div>
          </div>
        </div>
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
      </div>
    </div>
    );
  }
};

Builder.propTypes = {
  forms: PropTypes.arrayOf(PropTypes.object),
  addNewForm: PropTypes.func
}

export default Builder;
