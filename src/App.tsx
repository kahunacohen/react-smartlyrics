import { Helmet } from "react-helmet";
import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { About } from "./screens/about";
import { Home } from "./screens/home";


const App = () => {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://smartlyrics.com" />
      </Helmet>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div id="page">
          {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
