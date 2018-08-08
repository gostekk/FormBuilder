import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Builder from "../containers/Builder";
import Preview from "../containers/Preview";
import Export from "../containers/Export";
import Header from "../components/Header";

const App = (props) => (
  <Router>
    <div>
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
