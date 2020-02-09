import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { itemsFetchData } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
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
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
          </tr>
        </thead>
        <tbody>
          {items.data &&
            items.data.map((song: Song, i: number) => {
              return (
                <tr key={i}>
                  <td>{song.title}</td>
                  <td>{song.artist}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};
export default Songs;
