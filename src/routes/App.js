import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Builder from "../containers/Builder";
import Preview from "../containers/Preview";
import Export from "../containers/Export";
import Drawer from "../components/Drawer";

const App = () => (
  <Router>
    <Drawer>
      <Switch>
        <Route path="/" exact component={Builder}/>
        <Route path="/preview" exact component={Preview}/>
        <Route path="/export" exact component={Export}/>
      </Switch>
    </Drawer>
  </Router>
);

export default App;
