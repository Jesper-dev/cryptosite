import React, { useState, useEffect } from "react";
import "./app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/shared/Navbar";

import HomePage from "./components/HomePage";
import NewsPage from "./components/NewsPage";
import { MarketList } from "./apis/MarketList";
import { NewsList } from "./apis/NewsList";
import { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { call } from "./redux/api/newsapiSlice";

function App() {
  const [marketList, setMarketList] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const callApi = useSelector((state: RootState) => state.newsApi.value);
  const dispatch = useDispatch();

  /*
  DOCS I FOLLOW!
  https://redux-toolkit.js.org/tutorials/rtk-query
  */

  useEffect(() => {
    dispatch(call());
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage marketList={marketList} />
          </Route>
          <Route path="/news">
            <NewsPage newsList={newsList} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
