import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { itemsFetchData } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { FormGroup, Input, Table } from "reactstrap";
import { SongI } from "../../types";

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
            <th>My Song</th>
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
                    <FormGroup check>
                      <Input type="checkbox" name="check" id="exampleCheck" />
                    </FormGroup>
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
