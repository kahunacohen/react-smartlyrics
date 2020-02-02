import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { Head } from "./components/head";
import { Header } from "./components/header";
import { MainContent } from "./components/main-content";

import configureStore from "./store";

const store = configureStore({
  fetchingSongsHasErrored: false,
  songsAreLoading: false,
  fetchingSongsHasSucceeded: false
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
