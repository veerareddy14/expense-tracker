import React from "react";
import "./App.css";
import {
  Header,
  Balance,
  IncomeExpenses,
  ListTransactions,
  AddTransaction,
} from "./Components";

import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="App">
        <Balance />
        <IncomeExpenses />
        <ListTransactions />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
