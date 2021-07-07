import axios from "axios";

export const NewsList = async (
  setData: React.Dispatch<React.SetStateAction<never[]>>
) => {
  await axios
    .get(
      "https://newsdata.io/api/1/news?apikey=pub_479bc1cc6ef7ef6c0fbd8d53bc45f0eaf42&q&category=sports,health",
      {
        headers: {
          "Access-Control-Allow-Origin": "true",
        },
      }
    )
    .then((resp) => {
      setData(resp.data);
    });
};
