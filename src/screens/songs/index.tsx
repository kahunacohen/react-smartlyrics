import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { itemsFetchData } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import { SongI } from "../../types";

const Songs = () => {
  const items = useSelector((state: any) => state.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(itemsFetchData(`${process.env.REACT_APP_API_BASE_URL}/songs`));
  }, [dispatch]);
  console.log(items);

  return (
    <div>
      <Helmet>
        <title>Songs</title>
      </Helmet>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Composer</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 &&
            items.map((song: SongI, i: number) => {
              return (
                <tr key={i}>
                  <td>
                    <a href={`/songs/${song.id}/edit`}>Edit</a>
                  </td>
                  <td>
                    <a href={`/songs/${song.id}`}>{song.title}</a>
                  </td>
                  <td>{song.composer}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};
export default Songs;
