import axios from "axios";

export const MarketList = (
  setData: React.Dispatch<React.SetStateAction<never[]>>
) => {
  axios
    .get("https://api.coingecko.com/api/v3/coins/list?include_platform=true")
    .then((resp) => {
      console.log(resp.data);
      setData(resp.data);
    });
};
