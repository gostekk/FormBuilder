import React, { Component } from 'react';

export class Export extends Component {
  state = {
    export: this.props.forms
  };

  render() {
    return (
      <div className="card-body">
        <div className="form-group">
          <textarea className="form-control" rows="5" readOnly value={JSON.stringify(this.state.export)}>
          </textarea>
        </div> 
      </div>
    )
  }
}

export default Export;
