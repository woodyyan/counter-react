import React from "react";
import "./App.css";
import CounterGroup from "./components/CounterGroup";
import { COUNTER_GROUP_INIT_COUNT } from "./constants/constants";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup size={COUNTER_GROUP_INIT_COUNT} />
      </header>
    </div>
  );
}

export default App;
