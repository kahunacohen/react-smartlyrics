import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormGroup, Label, Input } from "reactstrap";
import { itemsFetchData, chordProChanged } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { parseChordProToHtml } from "../../utils";

import "./edit.css";

const Detail = () => {
  let { id } = useParams();
  const items = useSelector((state: any) => {
    return state.items;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemsFetchData(`http://localhost:3000/songs/${id}`));
  }, [dispatch, id]);

  const handleChordProChange = (evt: any) => {
    dispatch(chordProChanged(true));
    setTimeout(() => dispatch(chordProChanged(false)), 500)
  };

  const renderFromChordPro = () => {
    return parseChordProToHtml(items.body)
  }
  return (
    <div>
      <Helmet>
        <title>{items.title}</title>
      </Helmet>
      {items.body && (
        <div>
          <FormGroup>
            <Label for="chorpro">Chordpro</Label>
            <Input
              rows={items.body.length}
              size="500"
              type="textarea"
              name="chordpro"
              id="chorpro"
              defaultValue={items.body.join("\n")}
              onChange={handleChordProChange}
            />
          </FormGroup>
          <div
            dangerouslySetInnerHTML={{
              __html: renderFromChordPro()
            }}
          ></div>
        </div>
      )}
    </div>
  );
};
export default Detail;
