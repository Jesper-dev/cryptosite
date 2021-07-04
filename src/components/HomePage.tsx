import React, { useEffect } from "react";
import { MarketList } from "../apis/MarketList";

const HomePage = () => {
  useEffect(() => {
    MarketList();
  }, []);

  return (
    <>
      <div className="homePageContainer">
        <h1>Hej</h1>
      </div>
    </>
  );
};

export default HomePage;
