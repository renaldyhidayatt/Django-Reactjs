import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Navbar from "./PageWrap"
import { Switch, Route } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";
import CssBaseline from "@material-ui/core/CssBaseline";

const styles = theme => ({
  wrapper: {
    backgroundColor: theme.palette.common.white,
    spacer: theme.mixins.toolbar,
  }
});

class Main extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <Navbar/>
        <CssBaseline />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Main);
