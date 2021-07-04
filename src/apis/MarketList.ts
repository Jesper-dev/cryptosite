// import React, { useEffect } from "react";
import axios from "axios";

export const MarketList = () => {
  axios
    .get("https://api.coingecko.com/api/v3/coins/list?include_platform=true")
    .then((resp) => {
      console.log(resp.data);
    });
};
