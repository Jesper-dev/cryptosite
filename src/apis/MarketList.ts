import axios from "axios";

export const MarketList = async (
  setData: React.Dispatch<React.SetStateAction<never[]>>
) => {
  await axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
    .then((resp) => {
      setData(resp.data);
    });
};
