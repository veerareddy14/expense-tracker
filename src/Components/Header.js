import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  const title = {
    margin: "auto",
  };
  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography style={title} variant="h4">
            Expense Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <h6>-By Veera</h6>
    </div>
  );
};
export default Header;
