import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import PreviewChild from "../containers/PreviewChild";

export class Preview extends PureComponent {
  render() {
    return (
      <div>
        { this.props.forms.length
          ? this.props.forms.map((form) => 
            form.parentId === undefined 
            ? <PreviewChild key={form.id} {...form} />
            : undefined
          )
          : <div>No inputs added yet!</div>
        }
      </div>
    );
  }
};

Preview.propTypes = {
  forms: PropTypes.arrayOf(PropTypes.object),
}

export default Preview;
