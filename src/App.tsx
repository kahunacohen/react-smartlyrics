import { Helmet } from "react-helmet";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { MainContent } from "./components/main-content";
import { Head } from "./components/head";
import { Header } from "./components/header";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Head />
        <Header />
        <MainContent />
      </Router>
    </div>
  );
};

export default App;
