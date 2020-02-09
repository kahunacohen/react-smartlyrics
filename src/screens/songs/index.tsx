import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { itemsFetchData } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Song } from "../../types";

const Songs = () => {
  const items = useSelector((state: any) => state.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(itemsFetchData("http://localhost:3000/songs"));
  }, [dispatch]);
  console.log(items);

  return (
    <div>
      <Helmet>
        <title>Songs</title>
      </Helmet>
      <h2>Songs</h2>
      <ListGroup>
        {items.data &&
          items.data.map((song: Song, i: number) => {
            return <ListGroupItem key={i}>{song.title}</ListGroupItem>;
          })}
      </ListGroup>
    </div>
  );
};
export default Songs;
