import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link as MaterialLink } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyles: 'none',
    },
  },
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.325rem 0",
    marginBottom: "10px",
    width: "100%",
    transition: "all 150ms ease 0s",
    justifyContent: "flex-start",
    position: "fixed",
    borderBottom: `1px solid ${theme.palette.divider},`
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  }
});

class PageWrap extends Component{
  render(){
    const { classes } = this.props;
    return(
      <React.Fragment>
        <CssBaseline />
        <AppBar color="default" elevation={0}  className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              <Link to="/" component={MaterialLink} variant="button" color="textPrimary" className={classes.link}>
                Tester
              </Link>
            </Typography>
            <nav>
              <Link component={MaterialLink} variant="button" color="textPrimary" className={classes.link}>
                Features
              </Link>
              <Link component={MaterialLink} variant="button" color="textPrimary" className={classes.link}>
                Enterprise
              </Link>
              <Link to="/about" component={MaterialLink} variant="button" color="textPrimary" className={classes.link}>
                Support
              </Link>
            </nav>
            <Button to="/login" component={Link} color="primary" variant="outlined" className={classes.link}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(PageWrap);
