import React from "react";
import { Route, Switch } from "react-router-dom";

import { About } from "../../screens/about";
import Songs from "../../screens/songs";
import Show from "../../screens/song/show";
import Edit from "../../screens/song/edit";

export const MainContent = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/songs/:id/edit">
        <Edit />
      </Route>
      <Route path="/songs/:id">
        <Show />
      </Route>
      <Route path="/">
        <Songs />
      </Route>
    </Switch>
  );
};
