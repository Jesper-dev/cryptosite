type AppProps = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  price: number;
  ath: number;
  percent: number;
};

const CryptoCard = ({
  id,
  symbol,
  name,
  image,
  price,
  ath,
  percent,
}: AppProps): JSX.Element => {
  return (
    <div className="cardWrapper">
      <div className="titleWrapper">
        <h1>
          {name} - <span>{symbol}</span>
        </h1>
      </div>
      <div className="contentWrapper">
        <img src={image} width="50" height="50" alt="icon if coin" />
        <p>{name}</p>
        <p>Price: ${price.toFixed(2)}</p>
        <p>{percent.toFixed(2)}%</p>
        <p>ATH: ${ath.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CryptoCard;
