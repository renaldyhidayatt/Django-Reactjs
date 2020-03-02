import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Routing from "./Routing";
import Navbar from "./PageWrap"


const styles = theme => ({
  wrapper: {
    backgroundColor: theme.palette.common.white
  }
});

class Main extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <Navbar/>
        <Routing/>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Main);
