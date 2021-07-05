type AppProps = {
  marketList: Array<object>;
};

const HomePage = ({ marketList }: AppProps) => {
  console.log(marketList, "In HomePage, through props");

  return (
    <>
      <div className="homePageContainer">
        <h1>Hej</h1>
        {}
      </div>
    </>
  );
};

export default HomePage;
