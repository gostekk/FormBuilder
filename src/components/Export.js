import React, { PureComponent } from 'react';

export class Export extends PureComponent {
  state = {
    export: this.props.forms
  };

  render() {
    return (
      <div>
        <div>
          <textarea rows="5" readOnly value={JSON.stringify(this.state.export)}>
          </textarea>
        </div> 
      </div>
    )
  }
}

export default Export;
