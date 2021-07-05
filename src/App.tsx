import React, { useState, useEffect } from "react";
import "./app.scss";
import HomePage from "./components/HomePage";
import { MarketList } from "./apis/MarketList";

function App() {
  const [marketList, setMarketList] = useState([]);
  useEffect(() => {
    MarketList(setMarketList);
  }, []);
  return (
    <div className="App">
      <HomePage marketList={marketList} />
    </div>
  );
}

export default App;
