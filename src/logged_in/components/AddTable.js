import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";

const defaultToolbarStyles = {
  iconButton: {
  }
}

class AddingTable extends Component{
  handleClick = () => {
    console.log("click on icon");
  }
  render(){
    const { classes } = this.props;
    return(
      <React.Fragment>
        <Tooltip title="adding icon">
          <IconButton className={classes.iconButton} onClick={this.handleClick}>
            <AddIcon className={classes.deleteIcon} />
          </IconButton>
        </Tooltip>
      </React.Fragment>
    )
  }
}

export default withStyles(defaultToolbarStyles, { name: "AddingTable"})(AddingTable);
