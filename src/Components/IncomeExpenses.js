import React from "react";

import { Paper, Grid } from "@material-ui/core";

const IncomeExpenses = () => {
  const paperStyle = {
    textAlign: "center",
    paddingBottom: "30px",
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Paper style={paperStyle}>
          <h2>Income</h2>
          <h2 style={{ color: "green" }}>+$0.00</h2>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper style={paperStyle}>
          <h2>Expense</h2>
          <h2 style={{ color: "red" }}>-$0.00</h2>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default IncomeExpenses;
