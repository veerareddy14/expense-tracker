import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../Context/GlobalState";

const ListTransactions = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((item) => (
          <Transaction key={item.id} transaction={item} />
        ))}
      </ul>
    </div>
  );
};

export default ListTransactions;
