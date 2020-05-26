import React from "react";

const Balance = () => {
  const balanceStyle = {
    textAlign: "right",
  };
  return (
    <div style={balanceStyle}>
      <h2>Your Balance</h2>
      <h1>$0.00</h1>
      <hr />
    </div>
  );
};
export default Balance;
