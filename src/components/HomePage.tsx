import CryptoCard from "./crypto/CryptoCard";

interface Provider {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  ath: number;
  price_change_percentage_24h: number;
}

type AppProps = {
  marketList: Array<Provider>;
};

const HomePage = ({ marketList }: AppProps) => {
  return (
    <>
      <div className="homePageContainer">
        <div className="cryptoCardContainer">
          {marketList.map((item, i) => {
            return (
              <CryptoCard
                key={i}
                id={item.id}
                symbol={item.symbol}
                name={item.name}
                image={item.image}
                price={item.current_price}
                ath={item.ath}
                percent={item.price_change_percentage_24h}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
