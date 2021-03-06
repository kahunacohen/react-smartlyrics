import React, { Fragment } from "react";
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
  chordProChangedTxt: null
});

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <Router>
          <Head />
          <div className="row">
            <div className="col-12">
              <Header />
            </div>
          </div>
          <div className="row">
            <MainContent />
          </div>
        </Router>
      </Provider>
    </Fragment>
  );
};

export default App;
