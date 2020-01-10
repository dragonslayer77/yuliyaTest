import React from "react";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="layout">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/employee/view/:userId" component={Employee} />
      </Switch>
    </div>
  );
};

export default App;
