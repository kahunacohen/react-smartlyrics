import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { Head } from "./components/head";
import { Header } from "./components/header";
import { MainContent } from "./components/main-content";
import configureStore from "./store/configureStore";
const store = configureStore({
  items: [],
  itemsHasErrored: false,
  itemsIsLoading: true,
  chordProChanged: false,
  chordProChangedTxt: null
});

const App = () => {
  return (
    <div className="container">
      <Provider store={store}>
        <Router>
          <Head />
          <div className="row">
            <Header />
          </div>
          <div className="row">
            <MainContent />
          </div>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
