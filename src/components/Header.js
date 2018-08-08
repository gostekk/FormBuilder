import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <div>
    <div>
      <div>
        <div>
          <div>
            <h1>FormsBuilder</h1>
          </div>
          <div>
          <nav>
          <NavLink type="button" to="/" exact activeClassName="active">Builder</NavLink>
          <NavLink type="button" to="/preview" activeClassName="active">Preview</NavLink>
          <NavLink type="button" to="/export" activeClassName="active">Export</NavLink>
          </nav>
          </div>
        </div>
      </div>
        {props.children}
    </div>
  </div>
);

export default Header;