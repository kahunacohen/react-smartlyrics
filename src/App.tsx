import { Helmet } from "react-helmet";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Page } from "./components/page";

import { Header } from "./components/header";

const App = () => {
  return (
    <div className="container">
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://smartlyrics.com" />
      </Helmet>
      <Header />
      <Page />
    </Router>
    </div>
  );
};

export default App;
