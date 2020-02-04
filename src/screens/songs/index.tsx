import { Helmet } from "react-helmet";
import React  from "react";
import { Button } from "reactstrap";


const Songs = (props: any) => {
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

export default Songs;
