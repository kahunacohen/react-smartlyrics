import { Helmet } from "react-helmet";
import React from "react";
import { Button } from "reactstrap";

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h2>Home</h2>
      <p>Home</p>
      <Button color="danger">Danger!</Button>
    </div>
  );
};
