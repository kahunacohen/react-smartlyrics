import { Helmet } from "react-helmet";
import React from "react";
import { Button } from "reactstrap";

export const Songs = () => {
  return (
    <div>
      <Helmet>
        <title>Songs</title>
      </Helmet>
      <h2>Songs</h2>
      <p>Songs</p>
      <Button color="danger">Danger!</Button>
    </div>
  );
};
