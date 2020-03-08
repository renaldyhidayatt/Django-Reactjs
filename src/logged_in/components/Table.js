import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import Done from "@material-ui/icons/Done";
import Error from "@material-ui/icons/Error";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import AddTable from "./AddTable";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  }
})

class Table extends Component{
  render(){
    const { classes } = this.props;
    const columns = [
      {name: "ID"},
      {name: "buah"},
      "harga",
      "pembelian",
      {
        name: "Edit",
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            return(
              <Button variant="outlined" color="secondary">
                {`Edit`}
              </Button>
            )
          }
        }
      },
      {
        name: "Delete",
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            return(
              <Button variant="outlined" color="secondary">
                {`Delete`}
              </Button>
            )
          }
        }
      }
    ];
    const data = [
      [
        "012",
        "pisang",
        12.000,
        "10/28/2000"
      ],
      [
        "013",
        "kentang",
        13.000,
        "10/28/2000"
      ],
      [
        "014",
        "apel",
        14.000,
        "10/28/2000",
      ],
      [
        "015",
        "jeruk",
        15.000,
        "10/28/2000",
      ],
      [
        "016",
        "alpukat",
        16.000,
        "10/28/2000"
      ]
    ];
    const options = {
      filter: true,
      selectableRows: true,
      filterType: 'dropdown',
      responsive: 'scroll',
      rowsPerPage: 10,
      customToolbar: () => {
        return(
          <AddTable />
        )
      }
    }
    return(
      <MUIDataTable
        title={"Panggan"}
        data={data}
        columns={columns}
        options={options}
      />
    )
  }
}

export default withStyles(styles)(Table);
