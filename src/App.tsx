import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Head } from "./components/head";
import { Header } from "./components/header";
import { MainContent } from "./components/main-content";


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
