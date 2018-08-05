import React from "react";
import PropTypes from "prop-types";

import PreviewChild from "../containers/PreviewChild";

export class Preview extends React.Component {
  render() {
    return (
      <div className="card-body">
        <div className="col-md-12">
          { this.props.forms.length
            ? this.props.forms.map((form) => 
              form.parentId === undefined 
              ? <PreviewChild key={form._id} {...form} />
              : undefined
            )
            : <div>No inputs added yet!</div>
          }
        </div>
      </div>
    );
  }
};

Preview.propTypes = {
  forms: PropTypes.arrayOf(PropTypes.object),
}

export default Preview;
