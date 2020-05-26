import React, { useState } from "react";

import { TextField, Button } from "@material-ui/core";

const AddTransaction = () => {
  const [transaction, setTransaction] = useState("");
  const [amount, setAmount] = useState(0);

  const handleTransaction = (e) => {
    setTransaction(e.target.value);
    console.log(transaction);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);

    console.log(amount);
  };
  return (
    <div>
      <form>
        <h2>Add Transaction</h2>
        <hr />
        <h4>Details</h4>
        <TextField
          type="text"
          id="transaction"
          label="Enter transaction..."
          onChange={handleTransaction}
          value={transaction}
          style={{ width: "100%" }}
          variant="outlined"
        />
        <h4>Amount</h4>
        <TextField
          type="number"
          id="amount"
          label="Enter Amount..."
          onChange={handleAmount}
          value={amount}
          style={{ width: "100%" }}
          variant="outlined"
        />
        <Button
          variant="contained"
          style={{
            marginTop: "10px",
            width: "100%",
            backgroundColor: "rgb(35, 146, 250)",
          }}
        >
          Add Transaction
        </Button>
      </form>
    </div>
  );
};

export default AddTransaction;
