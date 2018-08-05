import React from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import Builder from "../containers/Builder";
import Preview from "../containers/Preview";
import Export from "../containers/Export";

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

const App = () => (
  <Router>
    <div className="container-fluid">
      <Header>
        <Switch>
          <Route path="/" exact component={Builder}/>
          <Route path="/preview" exact component={Preview}/>
          <Route path="/export" exact component={Export}/>
        </Switch>
      </Header>
    </div>
  </Router>
);

export default App;
