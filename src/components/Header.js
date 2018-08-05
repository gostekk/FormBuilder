import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <div className="container">
    <div className="card bg-light mb-3">
      <div className="card-header">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center">FormsBuilder</h1>
          </div>
          <div className="col-md-12">
          <nav className="nav nav-pills nav-fill">
          <NavLink type="button" to="/" exact activeClassName="active" className="nav-item nav-link">Builder</NavLink>
          <NavLink type="button" to="/preview" activeClassName="active" className="nav-item nav-link">Preview</NavLink>
          <NavLink type="button" to="/export" activeClassName="active" className="nav-item nav-link">Export</NavLink>
          </nav>
          </div>
        </div>
      </div>
        {props.children}
    </div>
  </div>
);

export default Header;