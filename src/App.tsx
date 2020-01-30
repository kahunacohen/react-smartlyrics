import { Helmet } from "react-helmet";
import React from "react";

import { Menu } from "./shared/menu";


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Helmet>
          <meta charSet="utf-8" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Menu />
      </header>
    </div>
  );
};

export default App;
