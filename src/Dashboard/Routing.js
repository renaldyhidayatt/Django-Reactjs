import React, { Component } from "react";
import { Switch, Route,withRouter } from "react-router-dom";
// import Dashboard from "./dashboard/Dashboard";
import Dashboard from "./Dashboard";
import Table from "./Table";
import Order from "./Orders";
import PropsRoute from "../route/PropsRoute";

class Routing extends Component{
  render(){
    return(
      <Switch>
		    <Route
          path="/c/table"
          component={Table}
        />
        <Route
          path=""
          component={Dashboard}
        />
      </Switch>

    )
  }
}

export default withRouter(Routing);
