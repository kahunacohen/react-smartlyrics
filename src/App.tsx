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
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <MainContent />
        </div>
      </Router>
    </div>
  );
};

export default App;
