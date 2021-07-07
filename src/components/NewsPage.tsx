import React from "react";

interface Provider {
  id: string;
}

type AppProps = {
  newsList: Array<Provider>;
};

const NewsPage = ({ newsList }: AppProps) => {
  console.log(newsList);
  return <div></div>;
};

export default NewsPage;
